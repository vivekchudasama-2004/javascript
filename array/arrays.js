const personarray =["vivek","mihir","kirtan"];
console.log(personarray[0])
console.log(personarray[1])
console.log(personarray[2])

const ages=[20 , 25, 29 ,28 ,64]
numberofpeople=ages.length
for (let i=0; i<=numberofpeople; i++)
{
  if(ages[i]%2===0)
  {
      console.log("even ages :" +ages[i])
  }
  else
  {
      console.log("odd ages :" +ages[i])
  }
}



console.log(3 + 2 + "7")
console.log(3 * 2 * "7")