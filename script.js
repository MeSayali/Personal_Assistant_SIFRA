let btn=document.querySelector("#btn");
let content=document.querySelector("#content");
let voice=document.querySelector("#voice");


function speak(text)
{
    let text_speak=new SpeechSynthesisUtterance(text) //text to speech web speech API
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="en-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe()
{
 let day=new Date()
 let hours=day.getHours()
 console.log(hours)
 if(hours>=0 && hours<12)
 {
    speak("Good Morning Mam")
 }
 else if(hours>=12 && hours<16)
 {
    speak("Good After noon Mam")
 }
 else{
    speak("Good Evenning Mam")
 }
}
window.addEventListener('load',()=>
{
    wishMe()
})

let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())

}

btn.addEventListener("click",()=>
{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})

function takeCommand(message)
{
     btn.style.display="flex"
      voice.style.display="none"
  if(message.includes("hello")||message.includes("hey"))
    {
        speak("Hello mam ,What can i help you?")
    }  
    else if(message.includes("who are you")){
      speak("I am virtual Assitant,created by sayali Pawar")
    }
    else if(message.includes("open youtube"))
    {
        speak("opening Youtube")
        window.open("https://www.youtube.com")
    }
    else if(message.includes("open google"))
        {
            speak("opening Google")
            window.open("https://www.google.co.in/")
        }
        else if(message.includes("time")){
            let time=new Date().toLocaleString(undefined,{hour:" numeric",minute:"numeric"})
            speak(time)
        }
        else if(message.includes("date")){
            let day=new Date().toLocaleString(undefined,{day:" numeric",month:"short"})
            speak(day)
        }
        else{
            speak(`this is what i found on internet regarding  ${message.replace("sifra","")}`)
            window.open(`https://www.google.com/search?q=${message}`)
        }


}

