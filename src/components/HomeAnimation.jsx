import { TypeAnimation } from "react-type-animation";

export default function HomeAnimation() {

    return (
        <TypeAnimation className="home-animation"
        sequence={[
            'Fake news is cheap to produce. ',
            1000,
            'Journalism can never be silent: that is its greatest virtue and its greatest fault.',
            1000,
            'By giving us the opinions of the uneducated, journalism keeps us in touch with the ignorance of the community.',
            1000,
            'Journalism is what we need to make democracy work.',
            1000,
            'The point of journalism is to hold people in positions of power accountable.',
            1000
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
    )
}