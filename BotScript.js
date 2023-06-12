// BotScript.js

//Variable for questions 
var korrekt = true;

// Function to send a message from the chatbot
function sendMessage(message) {
  const chatBody = document.querySelector('.chat-body');

  showTypingIndicator(); // Show typing indicator before sending message

  // Simulating delay of 1-2 seconds before displaying the message
  setTimeout(function() {
    hideTypingIndicator(); // Hide typing indicator

    const currentDate = getCurrentDate(); // Get current date and time
    const formattedDate = formatGermanDateTime(currentDate); // Format date and time in German format

    const messageElement = document.createElement('div');
    messageElement.classList.add('chatbot-message');
    messageElement.textContent = message;
    chatBody.appendChild(messageElement);

    const dateElement = document.createElement('div');
    dateElement.classList.add('message-date');
    dateElement.textContent = formattedDate;
    chatBody.appendChild(dateElement);

    scrollToBottom(); // Scroll to the bottom of the chat window
  }, getRandomDelay(1000, 2000)); // Random delay between 1 and 2 seconds
}

// Function to send a question with multiple answers
function sendQuestion(question, answers, answerCallback) {
  showTypingIndicator(); // Show typing indicator before sending question

  setTimeout(function() {
    hideTypingIndicator(); // Hide typing indicator

    const currentDate = getCurrentDate(); // Get current date and time
    const formattedDate = formatGermanDateTime(currentDate); // Format date and time in German format

    const chatBody = document.querySelector('.chat-body');
    const questionElement = document.createElement('div');
    questionElement.classList.add('chatbot-message');
    questionElement.textContent = question;
    chatBody.appendChild(questionElement);

    const dateElement = document.createElement('div');
    dateElement.classList.add('message-date');
    dateElement.textContent = formattedDate;
    chatBody.appendChild(dateElement);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    answers.forEach(function(answer) {
      const answerButton = document.createElement('button');
      answerButton.classList.add('button-response');
      answerButton.textContent = answer;
      buttonContainer.appendChild(answerButton);

      answerButton.addEventListener('click', function() {
        buttonContainer.remove(); // Remove the answer buttons

        // Call the answer callback with the selected answer
        answerCallback(answer);
      });
    });

    chatBody.appendChild(buttonContainer);

    scrollToBottom(); // Scroll to the bottom of the chat window
  }, getRandomDelay(1000, 2000)); // Random delay between 1 and 2 seconds
}



// Function to show the typing indicator
function showTypingIndicator() {
  const chatBody = document.querySelector('.chat-body');

  const typingIndicatorContainer = document.createElement('div');
  typingIndicatorContainer.classList.add('typing-indicator');

  const typingText = document.createElement('span');
  typingText.textContent = 'Schreibt...';
  typingIndicatorContainer.appendChild(typingText);

  chatBody.appendChild(typingIndicatorContainer);

  scrollToBottom(); // Scroll to the bottom of the chat window
}


// Function to hide the typing indicator
function hideTypingIndicator() {
  const typingIndicator = document.querySelector('.typing-indicator');
  if (typingIndicator) {
    typingIndicator.remove();
  }
}


// Helper function to get the current date and time
function getCurrentDate() {
  return new Date();
}

// Helper function to format the date and time in German format
function formatGermanDateTime(date) {
  const options = { weekday: 'long', hour: 'numeric', minute: 'numeric' };
  return date.toLocaleString('de-DE', options);
}

// Helper function to generate a random delay between min and max milliseconds
function getRandomDelay(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Helper function to scroll to the bottom of the chat window
function scrollToBottom() {
  const chatBody = document.querySelector('.chat-body');
  chatBody.scrollTop = chatBody.scrollHeight;
}

// ***Start of game, adjust as needed***
sendMessage("Hallo liebe Freunde der historischen Statuen.");

setTimeout(function() {
  sendMessage("Es freut mich, dass ihr euch auch für die steinernen Abbilder interessiert.");
}, 2000); 


setTimeout(function() {
  sendMessage("Mein gesammeltes Wissen steht euch zur Verfügung, um euch bei eurer Besichtigung zu helfen.");
}, 4000); 


setTimeout(function() {
  // Send a question with multiple answers
  sendQuestion("Nun einmal zuerst die Frage: In welcher Stadt befindet ihr euch denn?", ["Berlin", "Hamburg", "Köln", "München", "Frankfurt"], handleEinstiegsfragen);
}, 6000); 


// Function to handle the question of which city the player is based in
function handleEinstiegsfragen(selectedAnswer) {
  const chatBody = document.querySelector('.chat-body');

  // Create user message with selected answer
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-message');
  userMessage.textContent = selectedAnswer;
  chatBody.appendChild(userMessage);
  scrollToBottom();

  // Handle different responses based on the selected answer
  switch (selectedAnswer) {
    case 'Hamburg':
      // Send response for "Hamburg" answer
      setTimeout(function() {
        sendMessage("Yeah. Moin ihr Landratten...");
      }, 1000);
      
      setTimeout(function() {
        sendMessage("Super! Da gibt es ein paar echt interessante Statuen, Brunnen und Denkmäler ;-)");
      }, 3500); 
      
      setTimeout(function() {
        sendMessage("Lasst uns doch ein kleines Spiel spielen.");
      }, 5000); 
      
      setTimeout(function() {
        sendMessage("Ich stelle euch drei Fragen. Und wenn ich danach errate, wo die Statue steht, dann erzähle ich euch einen Fun Fact darüber.");
      }, 7000); 
      
      // Ask the "Ok?" question
      setTimeout(function() {
        sendQuestion("Ok?", ["Ok"], function(answer) {
          sendMessage("Zur ersten Frage, dem Auftakt unseres Spiels:");
        setTimeout(function() {
            sendMessage("Wurde die Statue von einem Sohn oder einer Tochter der Stadt entworfen?");
            }, 2000); 
           setTimeout(function() {
            sendQuestion("Also genauer: Wurde die Person in Hamburg geboren?", ["Ja","Nein"], handleGeburtsort);
             }, 4500); 
        });
      }, 9000);  

      break;
    case 'München':
      setTimeout(function() {
        sendMessage("Yeah. Servus!");
      }, 1000);
      
      setTimeout(function() {
        sendMessage("Super! Da gibt es ein paar echt interessante Statuen, Brunnen und Denkmäler ;-)");
      }, 3500); 
      
      setTimeout(function() {
        sendMessage("Lasst uns doch ein kleines Spiel spielen.");
      }, 5000); 
      
      setTimeout(function() {
        sendMessage("Ich stelle euch drei Fragen. Und wenn ich danach errate, wo die Statue steht, dann erzähle ich euch einen Fun Fact darüber.");
      }, 7000); 
      
      setTimeout(function() {
        sendQuestion("Ok?", ["Ok"], function(answer) {
          sendMessage("Zur ersten Frage, dem Auftakt unseres Spiels:");
        setTimeout(function() {
            sendMessage("Wurde die Statue von einem Sohn oder einer Tochter der Stadt entworfen?");
            }, 2000); 
           setTimeout(function() {
            sendQuestion("Also genauer: Wurde die Person in München geboren?", ["Ja","Nein"], handleGeburtsortMü);
             }, 4500); 
        });
      }, 9000);  
      
      break;

      case 'Berlin': 
      setTimeout(function() {
        sendMessage("Yeah. Dit find ick knorke!");
      }, 1000);
      
      setTimeout(function() {
        sendMessage("Super! Da gibt es ein paar echt interessante Statuen, Brunnen und Denkmäler ;-)");
      }, 3500); 
      
      setTimeout(function() {
        sendMessage("Lasst uns doch ein kleines Spiel spielen.");
      }, 5000); 
      
      setTimeout(function() {
        sendMessage("Ich stelle euch drei Fragen. Und wenn ich danach errate, wo die Statue steht, dann erzähle ich euch einen Fun Fact darüber.");
      }, 7000); 
      
      setTimeout(function() {
        sendQuestion("Ok?", ["Ok"], function(answer) {
          sendMessage("Zur ersten Frage, dem Auftakt unseres Spiels:");
        setTimeout(function() {
            sendMessage("Wurde die Statue von einem Sohn oder einer Tochter der Stadt entworfen?");
            }, 2000); 
           setTimeout(function() {
            sendQuestion("Also genauer: Wurde die Person in Berlin geboren?", ["Ja","Nein"], handleGeburtsortBe);
             }, 4500); 
        });
      }, 9000);  
      
      break;

      case 'Frankfurt':
      setTimeout(function() {
        sendMessage("Yeah. Ei Gude!");
      }, 1000);
      
      setTimeout(function() {
        sendMessage("Super! Da gibt es ein paar echt interessante Statuen, Brunnen und Denkmäler ;-)");
      }, 3500); 
      
      setTimeout(function() {
        sendMessage("Lasst uns doch ein kleines Spiel spielen.");
      }, 5000); 
      
      setTimeout(function() {
        sendMessage("Ich stelle euch drei Fragen. Und wenn ich danach errate, wo die Statue steht, dann erzähle ich euch einen Fun Fact darüber.");
      }, 7000); 
      
      setTimeout(function() {
        sendQuestion("Ok?", ["Ok"], function(answer) {
          sendMessage("Zur ersten Frage, dem Auftakt unseres Spiels:");
        setTimeout(function() {
            sendMessage("Ist hier irgendwo eine Uhr in der Nähe?");
            }, 2000); 
           setTimeout(function() {
            sendQuestion("Also genauer: Könnt ihr hier eine bekannte Uhr sehen?", ["Ja","Nein"], handleGeburtsortFr);
             }, 4500); 
        });
      }, 9000);  
      
      break;

      case 'Köln': 

            setTimeout(function() {
        sendMessage("Yeah. Alaaf, ihr Jecken...");
      }, 1000);
      
      setTimeout(function() {
        sendMessage("Super! Da gibt es ein paar echt interessante Statuen, Brunnen und Denkmäler ;-)");
      }, 3500); 
      
      setTimeout(function() {
        sendMessage("Lasst uns doch ein kleines Spiel spielen.");
      }, 5000); 
      
      setTimeout(function() {
        sendMessage("Ich stelle euch drei Fragen. Und wenn ich danach errate, wo die Statue steht, dann erzähle ich euch einen Fun Fact darüber.");
      }, 7000); 
      
      setTimeout(function() {
        sendQuestion("Ok?", ["Ok"], function(answer) {
          sendMessage("Zur ersten Frage, dem Auftakt unseres Spiels:");
           setTimeout(function() {
            sendQuestion("Wird hier geritten?", ["Ja","Nein"], handleGeburtsortFr);
             }, 2000); 
        });
      }, 9000);  

      break;
      default: 
      setTimeout(function() {
        sendMessage("Hm, irgendwas scheint nicht zu stimmen.");
      }, 1000); 

       // Prompt the question again
      setTimeout(function() {
        sendQuestion("In welcher Stadt befindet ihr euch?", ["Berlin", "Hamburg", "Köln", "München", "Frankfurt"], handleEinstiegsfragen);
      }, 4000); 

      break;
  }
}

// ***HAMBURG***
// Function to handle the question of where the artist was born
function handleGeburtsort(selectedAnswer) {
  const chatBody = document.querySelector('.chat-body');

  // Create user message with selected answer
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-message');
  userMessage.textContent = selectedAnswer;
  chatBody.appendChild(userMessage);
  scrollToBottom();

  switch (selectedAnswer) {
    case 'Ja':
      setTimeout(function() {
        korrekt = false;
        sendMessage("Die zweite Frage folgt sogleich...");
          }, 1000); 
      setTimeout(function() {
         sendQuestion("Gedenkt die Statue einem historischen Ereignis?", ["Ja","Nein"], handleHistorisch);
          }, 3000); 
      break;
    case 'Nein':
      setTimeout(function() {
        sendMessage("Die zweite Frage folgt sogleich...");
          }, 1000); 
      setTimeout(function() {
         sendQuestion("Gedenkt die Statue einem historischen Ereignis?", ["Ja","Nein"], handleHistorisch);
          }, 3000); 
      break;
    default:
      setTimeout(function() {
        sendMessage("Hm, irgendwas läuft hier falsch.");
      }, 1000); 
            setTimeout(function() {
        sendMessage("Ladet am besten noch mal neu.");
      }, 2000); 
      break;
  }
}

//Function to handle the question of whether the statue commemorates a historical event
function handleHistorisch(selectedAnswer) {
  const chatBody = document.querySelector('.chat-body');

  // Create user message with selected answer
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-message');
  userMessage.textContent = selectedAnswer;
  chatBody.appendChild(userMessage);
  scrollToBottom();

  switch (selectedAnswer) {
    case 'Ja':
      setTimeout(function() {
        sendMessage("Nun zur letzten Frage:");
          }, 1000); 
      setTimeout(function() {
         sendQuestion("Gibt es hier einen Drachen?", ["Ja","Nein"], handleDrache);
          }, 3000); 
      break;
    case 'Nein':
      setTimeout(function() {
        korrekt = false;
        sendMessage("Nun zur letzten Frage:");
          }, 1000); 
      setTimeout(function() {
         sendQuestion("Gibt es hier einen Drachen?", ["Ja","Nein"], handleDrache);
          }, 3000); 
      break;
    default:
      setTimeout(function() {
        sendMessage("Hm, irgendwas läuft hier falsch.");
      }, 1000); 
            setTimeout(function() {
        sendMessage("Ladet am besten noch mal neu.");
      }, 2000); 
      break;
  }
}

//Function to handle the question of whether there is a dragon nearby
function handleDrache(selectedAnswer) {
  const chatBody = document.querySelector('.chat-body');

  // Create user message with selected answer
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-message');
  userMessage.textContent = selectedAnswer;
  chatBody.appendChild(userMessage);
  scrollToBottom();

  switch (selectedAnswer) {
    case 'Ja':
      break;
    case 'Nein':
      korrekt = false;
      break;
    default:
      setTimeout(function() {
        sendMessage("Hm, irgendwas läuft hier falsch.");
      }, 1000); 
            setTimeout(function() {
        sendMessage("Ladet am besten noch mal neu.");
      }, 2000); 
      break;
  }

  if (korrekt) {
      setTimeout(function() {
        sendMessage("Hm, ich denke ihr seid im Ehrenhof am Hygieia-Brunnen.");
      }, 1000);
       setTimeout(function() {
         sendQuestion("Richtig?", ["Ja",], handleSuccess);
          }, 3000); 

  } else {
            setTimeout(function() {
        sendMessage("Ich gebe auf. Ich habe keine Ahnung.");
      }, 1000); 
            setTimeout(function() {
         sendQuestion("Versucht es einfach noch mal.", ["Ok",], handleFail);
          }, 3000); 
  }
}

function handleSuccess(selectedAnswer) {
  korrekt = true;
  const chatBody = document.querySelector('.chat-body');

  // Create user message with selected answer
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-message');
  userMessage.textContent = selectedAnswer;
  chatBody.appendChild(userMessage);
  scrollToBottom();

        setTimeout(function() {
        sendMessage("Super! Ich wusste es. Und nun wie versprochen...");
      }, 1000);
      
      setTimeout(function() {
        sendMessage("Ein Fun Fact.");
      }, 3000); 
      
      setTimeout(function() {
        sendMessage("Zu Beginn der 1920er Jahre fiel der Brunnen dem Vandalismus zum Opfer.");
      }, 5000); 
      
      setTimeout(function() {
        sendMessage("Eine unbekannte Person hatte etwas in den Sockel geritzt.");
      }, 7000); 

      setTimeout(function() {
        sendMessage("Diese wurde anscheinend unterbrochen, da sie es nur geschafft hatte, drei Buchstaben zu hinterlassen...");
      }, 9000); 

      setTimeout(function() {
        sendMessage("Die Buchstaben waren XXVI IV... was mag das wohl bedeuten?");
      }, 11000); 

      setTimeout(function() {
        sendMessage("Ihr braucht nicht am Brunnen zu suchen. Es wurde schon vor langer Zeit korrigiert.");
      }, 13000); 
}  

//When at least one question is answered wrong, it goes here
function handleFail(selectedAnswer) {
  korrekt = true;
  const chatBody = document.querySelector('.chat-body');

  // Create user message with selected answer
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-message');
  userMessage.textContent = selectedAnswer;
  chatBody.appendChild(userMessage);
  scrollToBottom();

  switch (selectedAnswer) {
      case 'Ok': 
        setTimeout(function() {
            sendMessage("Wurde die Statue von einem Sohn oder einer Tochter der Stadt entworfen?");
            }, 2000); 
        setTimeout(function() {
            sendQuestion("Also genauer: Wurde die Person in Hamburg geboren?", ["Ja","Nein"], handleGeburtsort);
             }, 4500); 
      break;
      default: 
            setTimeout(function() {
        sendMessage("Hm, irgendwas läuft hier falsch.");
      }, 1000); 
            setTimeout(function() {
        sendMessage("Ladet am besten noch mal neu.");
      }, 2000); 
      break;
  }
}  


// ***MÜNCHEN***
function handleGeburtsortMü(selectedAnswer) {
  const chatBody = document.querySelector('.chat-body');

  // Create user message with selected answer
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-message');
  userMessage.textContent = selectedAnswer;
  chatBody.appendChild(userMessage);
  scrollToBottom();

  switch (selectedAnswer) {
    case 'Ja':
      setTimeout(function() {
        korrekt = false;
        sendMessage("Die zweite Frage folgt sogleich...");
          }, 1000); 
      setTimeout(function() {
         sendQuestion("Ist mein Nachbar ein Fürst?", ["Ja","Nein"], handleFürst);
          }, 3000); 
      break;
    case 'Nein':
      setTimeout(function() {
        sendMessage("Die zweite Frage folgt sogleich...");
          }, 1000); 
      setTimeout(function() {
         sendQuestion("Ist mein Nachbar ein Fürst?", ["Ja","Nein"], handleFürst);
          }, 3000); 
      break;
    default:
      setTimeout(function() {
        sendMessage("Hm, irgendwas läuft hier falsch.");
      }, 1000); 
            setTimeout(function() {
        sendMessage("Ladet am besten noch mal neu.");
      }, 2000); 
      break;
  }
}

function handleFürst(selectedAnswer) {
  const chatBody = document.querySelector('.chat-body');

  // Create user message with selected answer
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-message');
  userMessage.textContent = selectedAnswer;
  chatBody.appendChild(userMessage);
  scrollToBottom();

  switch (selectedAnswer) {
    case 'Ja':
      setTimeout(function() {
        sendMessage("Nun zur letzten Frage:");
          }, 1000); 
      setTimeout(function() {
         sendQuestion("Gibt es hier eine Maria mit Kind?", ["Ja","Nein"], handleMaria);
          }, 3000); 
      break;
    case 'Nein':
      setTimeout(function() {
        korrekt = false;
        sendMessage("Nun zur letzten Frage:");
          }, 1000); 
      setTimeout(function() {
         sendQuestion("Gibt es hier einen Maria mit Kind?", ["Ja","Nein"], handleMaria);
          }, 3000); 
      break;
    default:
      setTimeout(function() {
        sendMessage("Hm, irgendwas läuft hier falsch.");
      }, 1000); 
            setTimeout(function() {
        sendMessage("Ladet am besten noch mal neu.");
      }, 2000); 
      break;
  }
}

function handleMaria(selectedAnswer) {
  const chatBody = document.querySelector('.chat-body');

  // Create user message with selected answer
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-message');
  userMessage.textContent = selectedAnswer;
  chatBody.appendChild(userMessage);
  scrollToBottom();

  switch (selectedAnswer) {
    case 'Ja':
      break;
    case 'Nein':
      korrekt = false;
      break;
    default:
      setTimeout(function() {
        sendMessage("Hm, irgendwas läuft hier falsch.");
      }, 1000); 
            setTimeout(function() {
        sendMessage("Ladet am besten noch mal neu.");
      }, 2000); 
      break;
  }

  if (korrekt) {
      setTimeout(function() {
        sendMessage("Hm, ich denke ihr seid am Willibald Gluck Denkmal.");
      }, 1000);
       setTimeout(function() {
         sendQuestion("Richtig?", ["Ja",], handleSuccessMü);
          }, 3000); 

  } else {
            setTimeout(function() {
        sendMessage("Ich gebe auf. Ich habe keine Ahnung.");
      }, 1000); 
            setTimeout(function() {
         sendQuestion("Versucht es einfach noch mal.", ["Ok",], handleFailMü);
          }, 3000); 
  }
}

function handleSuccessMü(selectedAnswer) {
  korrekt = true;
  const chatBody = document.querySelector('.chat-body');

  // Create user message with selected answer
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-message');
  userMessage.textContent = selectedAnswer;
  chatBody.appendChild(userMessage);
  scrollToBottom();

        setTimeout(function() {
        sendMessage("Super! Ich wusste es. Und nun wie versprochen...");
      }, 1000);
      
      setTimeout(function() {
        sendMessage("Ein Fun Fact.");
      }, 3000); 
      
      setTimeout(function() {
        sendMessage("Zu Beginn der 1920er Jahre fiel das Denkmal dem Vandalismus zum Opfer.");
      }, 5000); 
      
      setTimeout(function() {
        sendMessage("Eine unbekannte Person hatte etwas in den Sockel geritzt.");
      }, 7000); 

      setTimeout(function() {
        sendMessage("Diese wurde anscheinend unterbrochen, da sie es nur geschafft hatte, drei Buchstaben zu hinterlassen...");
      }, 9000); 

      setTimeout(function() {
        sendMessage("Die Buchstaben waren XVII VII... was mag das wohl bedeuten?");
      }, 11000); 

      setTimeout(function() {
        sendMessage("Ihr braucht nicht am Denkmal zu suchen. Es wurde schon vor langer Zeit korrigiert.");
      }, 13000); 
}  

function handleFailMü(selectedAnswer) {
  korrekt = true;
  const chatBody = document.querySelector('.chat-body');

  // Create user message with selected answer
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-message');
  userMessage.textContent = selectedAnswer;
  chatBody.appendChild(userMessage);
  scrollToBottom();

  switch (selectedAnswer) {
      case 'Ok': 
        setTimeout(function() {
            sendMessage("Wurde die Statue von einem Sohn oder einer Tochter der Stadt entworfen?");
            }, 2000); 
        setTimeout(function() {
            sendQuestion("Also genauer: Wurde die Person in München geboren?", ["Ja","Nein"], handleGeburtsortMü);
             }, 4500); 
      break;
      default: 
            setTimeout(function() {
        sendMessage("Hm, irgendwas läuft hier falsch.");
      }, 1000); 
            setTimeout(function() {
        sendMessage("Ladet am besten noch mal neu.");
      }, 2000); 
      break;
  }
}  

// ***BERLIN***

function handleGeburtsortBe(selectedAnswer) {
  const chatBody = document.querySelector('.chat-body');

  // Create user message with selected answer
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-message');
  userMessage.textContent = selectedAnswer;
  chatBody.appendChild(userMessage);
  scrollToBottom();

  switch (selectedAnswer) {
    case 'Ja':
      setTimeout(function() {
        korrekt = false;
        sendMessage("Die zweite Frage folgt sogleich...");
          }, 1000); 
      setTimeout(function() {
         sendQuestion("Sieht man von hier das Brandenburger Tor?", ["Ja","Nein"], handleTor);
          }, 3000); 
      break;
    case 'Nein':
      setTimeout(function() {
        sendMessage("Die zweite Frage folgt sogleich...");
          }, 1000); 
      setTimeout(function() {
         sendQuestion("Sieht man von hier das Brandenburger Tor?", ["Ja","Nein"], handleTor);
          }, 3000); 
      break;
    default:
      setTimeout(function() {
        sendMessage("Hm, irgendwas läuft hier falsch.");
      }, 1000); 
            setTimeout(function() {
        sendMessage("Ladet am besten noch mal neu.");
      }, 2000); 
      break;
  }
}

function handleTor(selectedAnswer) {
  const chatBody = document.querySelector('.chat-body');

  // Create user message with selected answer
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-message');
  userMessage.textContent = selectedAnswer;
  chatBody.appendChild(userMessage);
  scrollToBottom();

  switch (selectedAnswer) {
    case 'Ja':
      setTimeout(function() {
        sendMessage("Nun zur letzten Frage:");
          }, 1000); 
      setTimeout(function() {
         sendQuestion("Reitet hier jemand auf einem Vogel?", ["Ja","Nein"], handleVogel);
          }, 3000); 
      break;
    case 'Nein':
      setTimeout(function() {
        korrekt = false;
        sendMessage("Nun zur letzten Frage:");
          }, 1000); 
      setTimeout(function() {
         sendQuestion("Gibt es hier einen Maria mit Kind?", ["Ja","Nein"], handleVogel);
          }, 3000); 
      break;
    default:
      setTimeout(function() {
        sendMessage("Hm, irgendwas läuft hier falsch.");
      }, 1000); 
            setTimeout(function() {
        sendMessage("Ladet am besten noch mal neu.");
      }, 2000); 
      break;
  }
}

function handleVogel(selectedAnswer) {
  const chatBody = document.querySelector('.chat-body');

  // Create user message with selected answer
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-message');
  userMessage.textContent = selectedAnswer;
  chatBody.appendChild(userMessage);
  scrollToBottom();

  switch (selectedAnswer) {
    case 'Ja':
      break;
    case 'Nein':
      korrekt = false;
      break;
    default:
      setTimeout(function() {
        sendMessage("Hm, irgendwas läuft hier falsch.");
      }, 1000); 
            setTimeout(function() {
        sendMessage("Ladet am besten noch mal neu.");
      }, 2000); 
      break;
  }

  if (korrekt) {
      setTimeout(function() {
        sendMessage("Hm, ich denke ihr seid am Reiterstandbild Friedrichs des Großen.");
      }, 1000);
       setTimeout(function() {
         sendQuestion("Richtig?", ["Ja",], handleSuccessBe);
          }, 3000); 

  } else {
            setTimeout(function() {
        sendMessage("Ich gebe auf. Ich habe keine Ahnung.");
      }, 1000); 
            setTimeout(function() {
         sendQuestion("Versucht es einfach noch mal.", ["Ok",], handleFailBe);
          }, 3000); 
  }
}

function handleSuccessBe(selectedAnswer) {
  korrekt = true;
  const chatBody = document.querySelector('.chat-body');

  // Create user message with selected answer
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-message');
  userMessage.textContent = selectedAnswer;
  chatBody.appendChild(userMessage);
  scrollToBottom();

        setTimeout(function() {
        sendMessage("Super! Ich wusste es. Und nun wie versprochen...");
      }, 1000);
      
      setTimeout(function() {
        sendMessage("Ein Fun Fact.");
      }, 3000); 
      
      setTimeout(function() {
        sendMessage("Zu Beginn der 1920er Jahre fiel das Denkmal dem Vandalismus zum Opfer.");
      }, 5000); 
      
      setTimeout(function() {
        sendMessage("Eine unbekannte Person hatte etwas in den Sockel geritzt.");
      }, 7000); 

      setTimeout(function() {
        sendMessage("Diese wurde anscheinend unterbrochen, da sie es nur geschafft hatte, drei Buchstaben zu hinterlassen...");
      }, 9000); 

      setTimeout(function() {
        sendMessage("Die Buchstaben waren XXX VI... was mag das wohl bedeuten?");
      }, 11000); 

      setTimeout(function() {
        sendMessage("Ihr braucht nicht am Denkmal zu suchen. Es wurde schon vor langer Zeit korrigiert.");
      }, 13000); 
}  

function handleFailBe(selectedAnswer) {
  korrekt = true;
  const chatBody = document.querySelector('.chat-body');

  // Create user message with selected answer
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-message');
  userMessage.textContent = selectedAnswer;
  chatBody.appendChild(userMessage);
  scrollToBottom();

  switch (selectedAnswer) {
      case 'Ok': 
        setTimeout(function() {
            sendMessage("Wurde die Statue von einem Sohn oder einer Tochter der Stadt entworfen?");
            }, 2000); 
        setTimeout(function() {
            sendQuestion("Also genauer: Wurde die Person in Berlin geboren?", ["Ja","Nein"], handleGeburtsortBe);
             }, 4500); 
      break;
      default: 
            setTimeout(function() {
        sendMessage("Hm, irgendwas läuft hier falsch.");
      }, 1000); 
            setTimeout(function() {
        sendMessage("Ladet am besten noch mal neu.");
      }, 2000); 
      break;
  }
} 

// ***FRANKFURT***

function handleGeburtsortFr(selectedAnswer) {
  const chatBody = document.querySelector('.chat-body');

  // Create user message with selected answer
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-message');
  userMessage.textContent = selectedAnswer;
  chatBody.appendChild(userMessage);
  scrollToBottom();

  switch (selectedAnswer) {
    case 'Ja':
      setTimeout(function() {
        sendMessage("Die zweite Frage folgt sogleich...");
          }, 1000); 
      setTimeout(function() {
         sendQuestion("Ist die Statue einer Person gewidmet, die in Frankfurt geboen wurde?", ["Ja","Nein"], handleGut);
          }, 3000); 
      break;
    case 'Nein':
      setTimeout(function() {
        korrekt = false;
        sendMessage("Die zweite Frage folgt sogleich...");
          }, 1000); 
      setTimeout(function() {
         sendQuestion("Ist die Statue einer Person gewidmet, die in Frankfurt geboen wurde?", ["Ja","Nein"], handleGut);
          }, 3000); 
      break;
    default:
      setTimeout(function() {
        sendMessage("Hm, irgendwas läuft hier falsch.");
      }, 1000); 
            setTimeout(function() {
        sendMessage("Ladet am besten noch mal neu.");
      }, 2000); 
      break;
  }
}

function handleGut(selectedAnswer) {
  const chatBody = document.querySelector('.chat-body');

  // Create user message with selected answer
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-message');
  userMessage.textContent = selectedAnswer;
  chatBody.appendChild(userMessage);
  scrollToBottom();

  switch (selectedAnswer) {
    case 'Ja':
      setTimeout(function() {
        korrekt = false;
        sendMessage("Nun zur letzten Frage:");
          }, 1000); 
      setTimeout(function() {
         sendQuestion("Gibt es hier ein spuckendes Lama?", ["Ja","Nein"], handleLama);
          }, 3000); 
      break;
    case 'Nein':
      setTimeout(function() {
        sendMessage("Nun zur letzten Frage:");
          }, 1000); 
      setTimeout(function() {
         sendQuestion("Gibt es hier ein spuckendes Lama?", ["Ja","Nein"], handleLama);
          }, 3000); 
      break;
    default:
      setTimeout(function() {
        sendMessage("Hm, irgendwas läuft hier falsch.");
      }, 1000); 
            setTimeout(function() {
        sendMessage("Ladet am besten noch mal neu.");
      }, 2000); 
      break;
  }
}

function handleLama(selectedAnswer) {
  const chatBody = document.querySelector('.chat-body');

  // Create user message with selected answer
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-message');
  userMessage.textContent = selectedAnswer;
  chatBody.appendChild(userMessage);
  scrollToBottom();

  switch (selectedAnswer) {
    case 'Ja':
      break;
    case 'Nein':
      korrekt = false;
      break;
    default:
      setTimeout(function() {
        sendMessage("Hm, irgendwas läuft hier falsch.");
      }, 1000); 
            setTimeout(function() {
        sendMessage("Ladet am besten noch mal neu.");
      }, 2000); 
      break;
  }

  if (korrekt) {
      setTimeout(function() {
        sendMessage("Hm, ich denke ihr seid am Gutenberg-Denkmal.");
      }, 1000);
       setTimeout(function() {
         sendQuestion("Richtig?", ["Ja",], handleSuccessFr);
          }, 3000); 

  } else {
            setTimeout(function() {
        sendMessage("Ich gebe auf. Ich habe keine Ahnung.");
      }, 1000); 
            setTimeout(function() {
         sendQuestion("Versucht es einfach noch mal.", ["Ok",], handleFailFr);
          }, 3000); 
  }
}

function handleSuccessFr(selectedAnswer) {
  korrekt = true;
  const chatBody = document.querySelector('.chat-body');

  // Create user message with selected answer
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-message');
  userMessage.textContent = selectedAnswer;
  chatBody.appendChild(userMessage);
  scrollToBottom();

        setTimeout(function() {
        sendMessage("Super! Ich wusste es. Und nun wie versprochen...");
      }, 1000);
      
      setTimeout(function() {
        sendMessage("Ein Fun Fact.");
      }, 3000); 
      
      setTimeout(function() {
        sendMessage("Zu Beginn der 1920er Jahre fiel das Denkmal dem Vandalismus zum Opfer.");
      }, 5000); 
      
      setTimeout(function() {
        sendMessage("Eine unbekannte Person hatte etwas in den Sockel geritzt.");
      }, 7000); 

      setTimeout(function() {
        sendMessage("Diese wurde anscheinend unterbrochen, da sie es nur geschafft hatte, drei Buchstaben zu hinterlassen...");
      }, 9000); 

      setTimeout(function() {
        sendMessage("Die Buchstaben waren V VI... was mag das wohl bedeuten?");
      }, 11000); 

      setTimeout(function() {
        sendMessage("Ihr braucht nicht am Denkmal zu suchen. Es wurde schon vor langer Zeit korrigiert.");
      }, 13000); 
}  

function handleFailFr(selectedAnswer) {
  korrekt = true;
  const chatBody = document.querySelector('.chat-body');

  // Create user message with selected answer
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-message');
  userMessage.textContent = selectedAnswer;
  chatBody.appendChild(userMessage);
  scrollToBottom();

  switch (selectedAnswer) {
      case 'Ok': 
        setTimeout(function() {
            sendMessage("Ist hier irgendwo eine Uhr in der Nähe?");
            }, 2000); 
        setTimeout(function() {
            sendQuestion("Also genauer gefragt: Könnt ihr hier eine bekannte Uhr sehen?", ["Ja","Nein"], handleGeburtsortFr);
             }, 4500); 
      break;
      default: 
            setTimeout(function() {
        sendMessage("Hm, irgendwas läuft hier falsch.");
      }, 1000); 
            setTimeout(function() {
        sendMessage("Ladet am besten noch mal neu.");
      }, 2000); 
      break;
  }
} 

// ***KÖLN***

function handleGeburtsortKö(selectedAnswer) {
  const chatBody = document.querySelector('.chat-body');

  // Create user message with selected answer
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-message');
  userMessage.textContent = selectedAnswer;
  chatBody.appendChild(userMessage);
  scrollToBottom();

  switch (selectedAnswer) {
    case 'Ja':
      setTimeout(function() {
        sendMessage("Die zweite Frage folgt sogleich...");
          }, 1000); 
      setTimeout(function() {
         sendQuestion("Sind Künstler anwesend?", ["Ja","Nein"], handleKünstler);
          }, 3000); 
      break;
    case 'Nein':
      setTimeout(function() {
        korrekt = false;
        sendMessage("Die zweite Frage folgt sogleich...");
          }, 1000); 
      setTimeout(function() {
         sendQuestion("Sind Künstler anwesend?", ["Ja","Nein"], handleKünstler);
          }, 3000); 
      break;
    default:
      setTimeout(function() {
        sendMessage("Hm, irgendwas läuft hier falsch.");
      }, 1000); 
            setTimeout(function() {
        sendMessage("Ladet am besten noch mal neu.");
      }, 2000); 
      break;
  }
}

function handleKünstler(selectedAnswer) {
  const chatBody = document.querySelector('.chat-body');

  // Create user message with selected answer
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-message');
  userMessage.textContent = selectedAnswer;
  chatBody.appendChild(userMessage);
  scrollToBottom();

  switch (selectedAnswer) {
    case 'Ja':
      setTimeout(function() {
        sendMessage("Nun zur letzten Frage:");
          }, 1000); 
      setTimeout(function() {
         sendQuestion("Habt ihr euer Kölnisch Wasser immer dabei?", ["Ja","Nein"], handleWasser);
          }, 3000); 
      break;
    case 'Nein':
      setTimeout(function() {
        korrekt = false;
        sendMessage("Nun zur letzten Frage:");
          }, 1000); 
      setTimeout(function() {
         sendQuestion("Habt ihr euer Kölnisch Wasser immer dabei?", ["Ja","Nein"], handleWasser);
          }, 3000); 
      break;
    default:
      setTimeout(function() {
        sendMessage("Hm, irgendwas läuft hier falsch.");
      }, 1000); 
            setTimeout(function() {
        sendMessage("Ladet am besten noch mal neu.");
      }, 2000); 
      break;
  }
}

function handleWasser(selectedAnswer) {
  const chatBody = document.querySelector('.chat-body');

  // Create user message with selected answer
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-message');
  userMessage.textContent = selectedAnswer;
  chatBody.appendChild(userMessage);
  scrollToBottom();

  switch (selectedAnswer) {
    case 'Ja':
      break;
    case 'Nein':
      korrekt = false;
      break;
    default:
      setTimeout(function() {
        sendMessage("Hm, irgendwas läuft hier falsch.");
      }, 1000); 
            setTimeout(function() {
        sendMessage("Ladet am besten noch mal neu.");
      }, 2000); 
      break;
  }

  if (korrekt) {
      setTimeout(function() {
        sendMessage("Hm, ich denke ihr auf dem Heumarkt, beim Reiterstandbild von Friedrich Wilhelm III.");
      }, 1000);
       setTimeout(function() {
         sendQuestion("Richtig?", ["Ja",], handleSuccessKö);
          }, 3000); 

  } else {
            setTimeout(function() {
        sendMessage("Ich gebe auf. Ich habe keine Ahnung.");
      }, 1000); 
            setTimeout(function() {
         sendQuestion("Versucht es einfach noch mal.", ["Ok",], handleFailKö);
          }, 3000); 
  }
}

function handleSuccessKö(selectedAnswer) {
  korrekt = true;
  const chatBody = document.querySelector('.chat-body');

  // Create user message with selected answer
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-message');
  userMessage.textContent = selectedAnswer;
  chatBody.appendChild(userMessage);
  scrollToBottom();

        setTimeout(function() {
        sendMessage("Super! Ich wusste es. Und nun wie versprochen...");
      }, 1000);
      
      setTimeout(function() {
        sendMessage("Ein Fun Fact.");
      }, 3000); 
      
      setTimeout(function() {
        sendMessage("Zu Beginn der 1920er Jahre fiel das Denkmal dem Vandalismus zum Opfer.");
      }, 5000); 
      
      setTimeout(function() {
        sendMessage("Eine unbekannte Person hatte etwas in den Sockel geritzt.");
      }, 7000); 

      setTimeout(function() {
        sendMessage("Diese wurde anscheinend unterbrochen, da sie es nur geschafft hatte, drei Buchstaben zu hinterlassen...");
      }, 9000); 

      setTimeout(function() {
        sendMessage("Die Buchstaben waren I VII... was mag das wohl bedeuten?");
      }, 11000); 

      setTimeout(function() {
        sendMessage("Ihr braucht nicht am Denkmal zu suchen. Es wurde schon vor langer Zeit korrigiert.");
      }, 13000); 
}  

function handleFailKö(selectedAnswer) {
  korrekt = true;
  const chatBody = document.querySelector('.chat-body');

  // Create user message with selected answer
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-message');
  userMessage.textContent = selectedAnswer;
  chatBody.appendChild(userMessage);
  scrollToBottom();

  switch (selectedAnswer) {
      case 'Ok': 
        setTimeout(function() {
            sendQuestion("Wird hier geritten?", ["Ja","Nein"], handleGeburtsortKö);
             }, 4500); 
      break;
      default: 
            setTimeout(function() {
        sendMessage("Hm, irgendwas läuft hier falsch.");
      }, 1000); 
            setTimeout(function() {
        sendMessage("Ladet am besten noch mal neu.");
      }, 2000); 
      break;
  }
} 