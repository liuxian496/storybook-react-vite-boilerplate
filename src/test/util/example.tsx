import React from "react";
import { UtilStory } from "../../stories/util.stories";

import { Button } from "../../components/button";

const Test = () => {
    return (
        <>
            <Button />
        </>
    );
};

export const ExampleTest: UtilStory = {
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    render: () => <Test />,
};
