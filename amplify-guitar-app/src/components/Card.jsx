import woodGrain from "../assets/images/woodgrainbackground.png";
import lightWoodGrain from "../assets/images/lightwoodbackground.png";
import darkWoodGrain from "../assets/images/darkwoodbackground.png";

export default function Card({ title, description, category, children }) {

    const background = () => {
        if (category === "chord") return woodGrain;
        if (category === "scale") return darkWoodGrain;
        if (category === "lesson") return lightWoodGrain;
    }

    const textColor = category === "lesson" ? "text-black" : "text-white";

    return (
        <div className={`flex flex-col items-center rounded-xl p-6 m-4 min-h-[250px] mb-8 shadow-xl hover:shadow-2xl ${textColor}`}
        style={{ backgroundImage: `url(${background()})` }}
        >
            <div>
                <h3 className="text-3xl mb-4 font-['Lora'] font-semibold text-center">
                    {title}
                </h3>
            </div>
            <div className="flex flex-col grow font-['Nunito_Sans'] text-center">
                <p>{description}</p>
                <span className="mt-auto">{children}</span>
            </div>
        </div>
    )

}