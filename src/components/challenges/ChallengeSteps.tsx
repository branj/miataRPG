import { Steps, Button } from 'antd';
import React from 'react';
import { ChallengeStep } from '../../libs/models/challenge';

const { Step } = Steps;

interface GameSessionProp {
    challengeSteps : ChallengeStep [],
    completeFunction : any
}
  
const ChallengeSteps: React.FC<GameSessionProp> = ({challengeSteps, completeFunction}) => {
    const [currentStep, setCurrentStep] = React.useState(0)
    
    const next = () => {
        const current = currentStep + 1;
        setCurrentStep(current);
    }

    const prev = () => {
        const current = currentStep - 1;
        setCurrentStep(current);
    }

    return (
      <div style={{padding:'16px'}}>
        <Steps direction="vertical" style={{padding:'8px', paddingBottom: '24px'}} current={currentStep}>
          {challengeSteps.map((item,key) => (
              <Step key={key} title={item.title} subTitle={item.subTitle} description={item.description} />
          ))}
        </Steps>
    
        <div className="steps-action">
          {currentStep < challengeSteps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {currentStep === challengeSteps.length-1 && (
            <Button type="primary" onClick={() => completeFunction()}>
              Mark Done
            </Button>
          )}
          {currentStep > 0 && (
            <Button style={{ margin: 8 }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    );
}

export default ChallengeSteps
