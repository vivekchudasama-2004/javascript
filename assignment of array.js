const personarray=["vivek","sahil","janvi"]
const pgenderarrays =["male" , "male","female"]

for(let i=0; i<=personarray.length; i++)
{
    if(pgenderarrays[i]==="male")
    {
        console.log(personarray[i] + "gender : "+pgenderarrays[i])
    }
}