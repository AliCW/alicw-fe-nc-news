import { TypeAnimation } from "react-type-animation";

export default function HomeAnimation() {

    return (
        <TypeAnimation className="home-animation"
        sequence={[
            'Fake news is cheap to produce. ',
            1000,
            'Journalism can never be silent: that is its greatest virtue and its greatest fault.',
            2000,
            'It is unwise to attempt to attain knowledge by reading lists of quotations.',
            2000,
            'Journalism is what we need to make democracy work.',
            2000,
            'The point of journalism is to hold people in positions of power accountable.',
            2000,
            'pater noster, qui es in caelis, sanctificetur nomen tuum.',
            2000,
            'Adveniat regnum tuum.',
            1000,
            'Fiat voluntas tua, sicut in caelo et in terra.',
            2000,
            'Panem nostrum quotidianum da nobis hodie, et dimitte nobis debita nostra sicut et nos dimittimus debitoribus nostris.',
            5000,
            'Et ne nos inducas in tentationem, sed libera nos a malo. Amen.',
            5000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
    )
}