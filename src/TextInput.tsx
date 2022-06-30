import {useRecoilState} from "recoil";
import {ChangeEvent} from "react";
import {atoms} from "./atoms";

export default function TextInput() {

    const [text, setText] = useRecoilState(atoms.textState);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    return (
        <div>
            <input type="text" value={text} onChange={onChange}/>
            <br/>
            Echo: {text}
        </div>
    );
}
