
var strinManipulator = function(){
    
    function calcSentences(txtValue){
        console.log(txtValue);
        var sentences = new Array();
        var prevIndex = -1;
        for (i=0;i<txtValue.length;i++){
            if(txtValue[i] == "."){
                sentences.push(txtValue.substring(prevIndex+1,i));
                prevIndex = i;
            }
        }
        // console.log(sentences);
        return sentences;
    }
    function reverseW(wordValue){
        var response = "";
        for(let i=wordValue.length-1;i>=0;i--){
            response += wordValue[i];
            // console.log(response);
        }
        // console.log(response.length);
        return response;
    }

    this.changeFirstChar = function(txtValue){
        var response = "";
        var sentences = calcSentences(txtValue);
        for(i=0;i<sentences.length;i++){
            let sent  = sentences[i][0].toUpperCase() + sentences[i].substring(1,sentences[i].length);
            response += sent+".";
        }
        display(response);
    };

    this.changeFirstCharWord = function(txtValue){
        var response = "";
        var sentences = calcSentences(txtValue);
        for(i=0;i<sentences.length;i++){
            for(j=0;j<sentences[i].length;j++){
                if(sentences[i][j] == " "){
                    let word = sentences[i].substring(prevIndex+1,j);
                    console.log(prevIndex,j);
                    console.log(word);
                    response += word[0].toUpperCase() + word.substring(1,word.length) + " ";
                    prevIndex = j;
                }
            }
            var prevIndex = -1;
            response += ".";
        }
        display(response);
    }
    this.reverseWord = function(txtValue){
        var response = "";
        var sentences = calcSentences(txtValue);
        for(i=0;i<sentences.length;i++){
            for(j=0;j<sentences[i].length;j++){
                if(sentences[i][j] == " "){
                    let word = sentences[i].substring(prevIndex+1,j);
                    response += reverseW(word)+" ";
                    // console.log(i);
                    prevIndex = j;
                }
            }
            var prevIndex = -1;
            response += ".";
        }
        display(response);
    }

    this.findAI = function(txtValue){
        var response = "";
        var sentences = calcSentences(txtValue);
        for(i=0;i<sentences.length;i++){
            for(j=0;j<sentences[i].length;j++){
                if(sentences[i][j] == " "){
                    let word = sentences[i].substring(prevIndex+1,j);
                    for(k=0;k<word.length;k++){
                        if(word[k] == "a" || word[k] == "i"){
                            response += word+" ";
                        }
                    }
                    prevIndex = j;
                }
            }
            var prevIndex = -1;
            response += ".";
        }
        display(response);   
    }
    this.replaceWhite = function(txtValue){
        var response = "";
        var sentences = calcSentences(txtValue);
        var prevIndex = -1;
        for(i=0;i<sentences.length;i++){
            for(j=0;j<sentences[i].length;j++){
                if(sentences[i][j] == " "){
                    let word = sentences[i].substring(prevIndex+1,j);
                    response += word+"!";
                    prevIndex = j;
                }
            }
            response += ".";
        }
        display(response);   
    }
    

    function display(resultText){
        console.log(resultText);
        document.getElementById("reponseValue").innerHTML = "<h3>"+resultText+"</h3>";
    }

};

window.onload = function(){
    var txt = document.getElementById("inputText");
    var s1 = new strinManipulator();

    document.getElementById('one').addEventListener('click',function(){
        s1.changeFirstChar(txt.value);
    });
    document.getElementById('two').addEventListener('click',function(){
        s1.changeFirstCharWord(txt.value);
    });
    document.getElementById('four').addEventListener('click',function(){
        s1.reverseWord(txt.value);
    });
    document.getElementById('three').addEventListener('click',function(){
        s1.findAI(txt.value);
    });
    document.getElementById('five').addEventListener('click',function(){
        s1.replaceWhite(txt.value);
    });

}