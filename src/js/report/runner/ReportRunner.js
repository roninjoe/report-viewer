console.log("Entering ReportRunner")
if (process.argv.length > 2) {
    console.log(`running report ${process.argv.slice(2)}`);
}
 module.exports = class ReportRunner {

    constructor(){
        console.log("Entering ReportRunner::constructor");
    }


}