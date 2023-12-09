import { useState } from "react";
import Title from "./components/Title";
import App from "./App";
function Hub(args: { SetName: React.Dispatch<React.SetStateAction<string | undefined>>; SetScreen: React.Dispatch<React.SetStateAction<number>> }) {
    return (
        <>
            <Title>Poker Hub</Title>
            <div className="page hub">
                <div className="center">
                    <div className="header">
                        <div className="img-header">
                            {/* <img src="iconclean.png" alt="" /> */}
                            <h3>Poker</h3>
                        </div>
                        <h5
                            onClick={() => {
                                document.location.href = "https://coder-1t45.github.io/";
                            }}
                        >
                            @coder-1t45
                            <img src="smallheart.png" alt="" style={{ height: 25, width: 25, marginBlock: "auto", translate: "5px 5px" }} />
                        </h5>
                    </div>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        onChange={(e) => {
                            args.SetName(e.currentTarget.value);
                        }}
                    />
                    <div className="buttons">
                        <button
                            onClick={() => {
                                args.SetScreen(1);
                            }}
                        >
                            JOIN
                        </button>
                        <button
                            onClick={() => {
                                args.SetScreen(2);
                            }}
                        >
                            CREATE
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

function Join({ name }: { name: string }) {
    return <App name={name} ip="coder-1t45-poker" />;
}
function Create({ name }: { name: string }) {
    return <App name={name} ip="coder-1t45-poker" create={true} />;
}

function Switch() {
    const [name, SetName] = useState<string>();
    const [screen, SetScreen] = useState<number>(0);

    if (name !== undefined) {
        switch (screen) {
            case 1:
                return <Join name={name} />;
            case 2:
                return <Create name={name} />;
            default:
                return <Hub SetName={SetName} SetScreen={SetScreen} />;
        }
    } else {
        return <Hub SetName={SetName} SetScreen={SetScreen} />;
    }
}

export default Switch;
