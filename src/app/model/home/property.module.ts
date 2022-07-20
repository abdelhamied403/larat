export class PropertyHeader {
    firstTopDiv: string;
    firstDivEle: string;
    firstTextDiv: string;
    secondTopDiv: string;
    secondDivEle: string;
    secondDivText: string;
    showFirstIcon: boolean;
    thirdTopDiv: string;
    thirdDivEle: string;
    thirdDivText: string;
    showSecIcon: boolean;
    showThirdIcon: boolean;
    fourthTopDiv: string;
    fourthDivEle: string;
    fourthDivText: string;
    showFourthIcon: boolean;

    constructor(firstTopDiv: string, firstDivEle: string, firstTextDiv: string, secondTopDiv: string, secondDivEle: string,
        secondDivText: string, showFirstIcon: boolean, showSecIcon: boolean, showThirdIcon: boolean,
        thirdTopDiv: string, thirdDivEle: string, thirdDivText: string, showFourthIcon: boolean, fourthTopDiv: string,
        fourthDivEle: string, fourthDivText: string
        
        ) {
        this.firstDivEle = firstDivEle;
        this.firstDivEle = firstDivEle;
        this.firstTopDiv = firstTopDiv;
        this.secondTopDiv = secondTopDiv;
        this.secondDivEle = secondDivEle;
        this.secondDivText = secondDivText;
        this.firstTextDiv = firstTextDiv;
        this.showFirstIcon = showFirstIcon;
        this.showSecIcon = showSecIcon;
        this.thirdDivEle = thirdDivEle
        this.thirdDivText = thirdDivText
        this.thirdTopDiv = thirdTopDiv
        this.showThirdIcon = showThirdIcon;
        this.fourthTopDiv = fourthTopDiv;
        this.fourthDivEle = fourthDivEle;
        this.fourthDivText = fourthDivText;
        this.showFourthIcon = showFourthIcon;
    }
}
