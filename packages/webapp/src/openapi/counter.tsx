import { useCallback, useEffect, useState } from 'react';
import { DefaultService } from './generated';

export const OpenAPICounter: React.FC = () => {

  const [value, setValue] = useState<number| undefined>()
  const [error, setError] = useState<string | undefined>()

  useEffect(() => {
    DefaultService.getValue()
      .then(response => {
        setValue(response.value)
      })
      .catch(e => { 
        setError(e.message) 
      })
  }, [setValue])

  const onButtonClick = useCallback(async () => {
    const increment = 1
    try {
      setError(undefined) 
      await DefaultService.postInc({ amount: increment })
      const response = await DefaultService.getValue()
      setValue(response.value)
    } catch(e) {
      if(e instanceof Error){
        setError(e.message) 
      }
    }
  }, [setValue]);

  return (
    <div>
      <p><b>OpenAPI Example</b></p>
      { error && (<p style={{ color: 'red'}}>{error}</p>)}
      { !error && (<p><span>Counter Value: {value}</span> <span><button onClick={onButtonClick}>+1</button></span></p>) }
    </div>
  );

};
