import { useState } from 'react';

export const useInput = (initValue) => {
    const [value, setValue] = useState(initValue);

    return{

        value, setValue, reset: () => setValue(""), bind: {
            value,
            onChange: (e) => setValue(e.target.value)
        }
    }
}