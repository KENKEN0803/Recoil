import {selector, useRecoilValue} from "recoil";
import {atoms} from "./atoms";

export default function CharacterCount() {

    const charCountState = selector({
        key: 'charCountStateSelector', // unique ID (with respect to other atoms/selectors)
        get: ({get}) => {
            const text = get(atoms.textState);

            return text.length;
        },
    });

    const count = useRecoilValue(charCountState);

    return <>Character Count: {count}</>;
}
