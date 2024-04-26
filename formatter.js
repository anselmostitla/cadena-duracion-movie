
function formatDuration(seconds){

   if(seconds<0) return
   if(seconds==0) {
      console.log("now");
      return
   }

   divisors= [60, 60, 24, 365]
   maxQuotientValues = [60, 24, 365, Number.MAX_VALUE]

   // TODO: get years from duration, 
   // then get days from a residual duration , 
   // and so on... get hours and minutes from the residual duration
   let oldDivisor = 1
   let quotient
   let messages = []
   while(seconds >= 60){
      for(let i=0; i<divisors.length; i++){
         divisor = divisors[i] * oldDivisor
         quotient = Math.floor(seconds/divisor)
         oldDivisor = divisor
         
         if(quotient> 0 && quotient < maxQuotientValues[i]){
            seconds = seconds % divisor
            oldDivisor = 1
            messages.push(quotient + " " + selectTimeUnit(quotient)[i+1])
            break
         } 
         
      }      
   }

   // TODO: finally get seconds from the last residual duration
   if(seconds > 0){
      messages.push(seconds + " " + selectTimeUnit(seconds)[0])
   } 

   // TODO: set up message
   txt = " --> "
   if(messages.length==1){
      txt += messages[0]
   } else if(messages.length==2){
      txt += messages[0] + " and " + messages[1]
   } else {
      for(let i=0; i<messages.length-2; i++){
         txt += messages[i] + ", "
      }
      txt += messages[messages.length-2] + " and " + messages[messages.length-1]
   }

   console.log(txt);
   console.log("");

}

function selectTimeUnit(timeValue){
   if (timeValue == 1) return ["second","minute", "hour", "day", "year"]
   else return ["seconds","minutes", "hours", "days", "years"]
}


function sampleGeneratorForTesting(){

   maxTimeUnits = {
      "years": [0,100],
      "days": [0,365],
      "hours": [0,24],
      "minutes": [0,60],
      "seconds": [0,60],
   }

   // TODO: generate a random sample like {years:0, days:1, hours:18, minutes:7, seconds:0}
   randomSample = {}
   for(key in maxTimeUnits){
      upperValue = maxTimeUnits[key][1]
      randomTime = Math.floor(Math.random()*upperValue)
      randomSample[key] = [0,1, randomTime][Math.floor(Math.random()*3)]
   }

   // TODO: get total seconds from a random sample like {years:0, days:1, hours:18, minutes:7, seconds:0}
   totalSeconds = 0
   for (key in randomSample){
      totalSeconds += randomSample[key]*totalSecondsIn(key) 
   }

   return [randomSample, totalSeconds]
}

function totalSecondsIn(timeUnit){
   seconds = { seconds: 1, minutes: 60, hours: 60*60, days: 60*60*24, years: 60*60*24*365 }
   return seconds[timeUnit]
}


function testing(){
   for(let k=0; k<5; k++){
      
      // TODO: generate a random sample for testing
      const [randomSample, totalSeconds] = sampleGeneratorForTesting()
      console.log(JSON.stringify(randomSample) + ", totalSeconds: " + totalSeconds);
      
      // TODO: format total seconds into a human-friendly way
      formatDuration(totalSeconds)
      
   }
}

testing()