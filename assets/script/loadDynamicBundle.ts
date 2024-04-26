import { _decorator, assetManager, Component, Node, Sprite, SpriteFrame } from "cc";
const { ccclass, property } = _decorator;

@ccclass("loadDynamicBundle")
export class loadDynamicBundle extends Component {
    @property({ type: Sprite })
    img: Sprite = null;
    protected onLoad(): void {
        // assetManager.loadBundle("localhost:8000", (err, bundle) => {
        //     // if (err) {
        //     //     console.log("asset manager error", err);
        //     //     return;
        //     // }
        //     // console.log("bundle", bundle);
        //     // // bundle.load("resources/person/person1/spriteFrame", SpriteFrame, null, (err, spriteFrame) => {
        //     // //     if (err) {
        //     // //         console.log("bundle error", err);
        //     // //         return;
        //     // //     }
        //     // //     this.img.spriteFrame = spriteFrame;
        //     // // });
        // });
    }
    start() {
        assetManager.loadBundle(
            "https://storage.googleapis.com/everi-games/testingresources",
            { version: "c9750" },
            (err, bundle) => {
                if (err) {
                    console.log("asset manager error", err);
                    return;
                }
                console.log("bundle", bundle);

                bundle.load("person/person1/spriteFrame", SpriteFrame, null, (err, spriteFrame) => {
                    if (err) {
                        console.error("bundle error", err);
                        return;
                    }
                    console.log(spriteFrame.getHash());
                    console.log(spriteFrame);
                    this.img.spriteFrame = spriteFrame;
                });
            }
        );
    }

    update(deltaTime: number) {}

    // onClick() {
    // assetManager.loadBundle("localhost:3000/bundle1", (err, bundle) => {
    //     if (err) {
    //         console.log("asset manager error", err);
    //         return;
    //     }
    //     bundle.load("resources/person1/spriteFrame", SpriteFrame, null, (err, spriteFrame) => {
    //         if (err) {
    //             console.log("bundle error", err);
    //             return;
    //         }
    //         this.img.spriteFrame = spriteFrame;
    //     });
    // });
    // }
}
