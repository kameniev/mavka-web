class SystemFunctions{
    static changeStringBeetwenHomeAndMain(homeString){
        let subjectString = "";
        if(homeString == "Математика"){
            subjectString = "математики";
        }
        if(homeString == "Українська мова і література"){
            subjectString = "української мови і літератури";
        }
        if(homeString == "Англійська мова"){
            subjectString = "англійської мови";
        }
        return subjectString;
    }
}
export default SystemFunctions;