const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(drivers, name)

{
  name = name.toLowerCase();

  return drivers.filter(el => el.toLowerCase() === name);

} 

console.log(findMatching(drivers,'Bobby'));

function fuzzyMatch(drivers,value)
{
  
  return drivers.filter((el)=>el.toLowerCase().startsWith(value.toLowerCase()));

}
console.log(fuzzyMatch(drivers, 'Sa'));

function matchName(drivers , name)
{
   drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
  return drivers.filter((el)=>el.name.toLowerCase()===name.toLowerCase());
}
console.log(matchName(drivers,'sally'));





