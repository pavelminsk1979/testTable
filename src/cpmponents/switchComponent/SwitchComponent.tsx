import * as Switch from '@radix-ui/react-switch'

import st from './SwitchComponent.module.css'

type PropsType = {
    handlerOnChackedChange: (checked: boolean) => void
}
export const SwitchComponent = ({ handlerOnChackedChange }: PropsType) => {
    return (
        <div>
            <div>
                <Switch.Root className={st.SwitchRoot} onCheckedChange={handlerOnChackedChange}>
                    <Switch.Thumb className={st.SwitchThumb} />
                </Switch.Root>
            </div>
        </div>
    )
}
