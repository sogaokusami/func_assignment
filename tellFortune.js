let countChildren = 3;

function tellFortune(countChildren, partnerName, geoLocation, jobRole) {
  let result = `You will be a ${jobRole} in ${geoLocation}, and married to ${partnerName} with ${countChildren} kids.`;

  return result;
}

console.log(tellFortune(3, "Buky", "Monaco", "Full Stack Developer"));
