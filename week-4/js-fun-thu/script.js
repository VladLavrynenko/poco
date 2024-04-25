// Printing quotes
// Create a program that prompts for a quote and an author. 
// Display the quotation and author as shown here:
// [Author] says, "[Quote]" (Replace [Author] and [Quote] with the actual values

showQuote();

function showQuote() {
    let authorName = prompt("Enter the author. (q - quit)");
    let quoteInput = "";

    while (authorName != "q") {
        quoteInput = prompt("Enter the quote of the author.")
        let qouteOutput = `${authorName} says, \"${quoteInput}\"`;
        alert(qouteOutput);
        authorName = prompt("Enter the author. (q - quit)");
    }
}