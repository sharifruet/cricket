const Match = require('../models/match');
const Series = require('../models/series');
const Team = require('../models/team');
const Venue = require('../models/venue');
const Innings = require('../models/innings');
const currwntState = require('../models/currentState');
const CurrentState = require('../models/currentState');

// Create a new match
exports.createMatch = async (req, res) => {
  try {
    const match = await Match.create(req.body);
    return res.status(201).json(match);
  } catch (error) {
    return res.status(500).json({ error: 'Error creating match' });
  }
};

// Get all matches
exports.getAllMatches = async (req, res) => {
  try {
    const matches = await Match.findAll();
    return res.status(200).json(matches);
  } catch (error) {
    return res.status(500).json({ error: 'Error getting matches' });
  }
};

// Get a specific match by ID
exports.getMatchById = async (req, res) => {
  const { id } = req.params;
  try {
    const match = await Match.findByPk(id);
    if (!match) {
      return res.status(404).json({ error: 'Match not found' });
    }
    return res.status(200).json(match);
  } catch (error) {
    return res.status(500).json({ error: 'Error getting match' });
  }
};

// Update a match by ID
exports.updateMatch = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Match.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedMatch = await Match.findByPk(id);
      return res.status(200).json(updatedMatch);
    }
    return res.status(404).json({ error: 'Match not found' });
  } catch (error) {
    return res.status(500).json({ error: 'Error updating match' });
  }
};

// Delete a match by ID
exports.deleteMatch = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Match.destroy({
      where: { id },
    });
    if (deleted) {
      return res.status(204).send();
    }
    return res.status(404).json({ error: 'Match not found' });
  } catch (error) {
    return res.status(500).json({ error: 'Error deleting match' });
  }

};

exports.processICCMatch = async (req, res) =>{
  console.log("processICCMatch: start");
  try{
      let match = req.body;
      const matchInfo = match.matchInfo;
      const innings = match.innings;

      let matchId = match.matchId;
      let tournamentId = matchId?.tournamentId;

      const idMatch = matchId?.id;
      
      if(tournamentId)
        processTournament(tournamentId);
      
      if(matchId)
        processMatch(matchId);
      
      if(matchInfo){
        processMatchInfo(matchInfo, idMatch);
      }else{
        console.log(matchInfo);
      }  

      processInnings(match);
      processCurrentState(match);
      //console.log(innings);
          
      //console.log(matchId);

  }catch(e){
      console.log(e);
  }

  return res.json({success: true});
};

processMatch = async (matchId)=>{
  if(matchId){
    let id = matchId.id;
    let name = matchId.name;
    const match = await Match.findByPk(id);
    //console.log(match);
    if(match == null){
      console.log('Match not found');
      const match = await Match.create({id:id, name: name});
     // console.log(match);
    }else{
      console.log('Match found');
    }
  }
}

processTournament = async (tournament)=>{
  if(tournament){
    let id = tournament.id;
    let name = tournament.name;
    const series = await Series.findByPk(id);
    //console.log(series);
    if(series == null){
      console.log('Series not found');
      const series = await Series.create({id:id, title: name});
      //console.log(series);
    }else{
      console.log('Series found');
    }
  }
}

processMatchInfo = async (matchInfo, matchId)=>{
  console.log("processMatchInfo: start " + matchId);
  const additionalInfo = matchInfo.additionalInfo;
  const teams = matchInfo.teams;
  const venue = matchInfo.venue;

  let team1 = null;
  let team2 = null;
  const venueId = venue.id;
  const matchDate = matchInfo.matchDate;
  const matchEndDate = matchInfo.matchEndDate;
  const matchType = matchInfo.matchType;
  const oversLimit = matchInfo.oversLimit;
  const groupName = matchInfo.groupName;
  const totalBalls = matchInfo.totalBalls;
  const matchStatus = matchInfo.matchStatus;

  const matchState = matchInfo.matchState;
  const description = matchInfo.description;
  const matchSummary = matchInfo.matchSummary;
  const inningsSummary = matchInfo.inningsSummary;

  addVenueIfNotExists(venue);

  if(teams){
    for(let i=0;i<teams.length;i++){
      const team = teams[i]?.team;
      addTeamIfNotExists(team);
      if(i==0){
        team1 = team.id;

      }else{
        team2 = team.id;
      }
      console.log(team);
    }
  }

  if(team1!=null){
    const id = matchId;
    const [updated] = await Match.update({
      team1: team1, team2: team2, matchDate: matchDate, matchEndDate: matchEndDate, venueId: venueId, 
      matchType: matchType, oversLimit: oversLimit, groupName: groupName, totalBalls: totalBalls, matchStatus: matchStatus,
      matchState: matchState, description: description, matchSummary: matchSummary, inningsSummary: inningsSummary
    }, {
      where: { id },
    });
  }
}


addTeamIfNotExists = async (team) =>{
  const existingTeam = await Team.findByPk(team.id);
  if(existingTeam){
    console.log('Team Found');
  }else{
    console.log('Team Not Found');
    const newTeam = Team.create(team);
  }
}


addVenueIfNotExists = async (venue) =>{
  const existingVenue= await Venue.findByPk(venue.id);
  if(existingVenue){
    console.log('Venue Found');
  }else{
    console.log('Venue Not Found');
    const newVenue = Venue.create(venue);
  }
}

processInnings = async (match) =>{
  console.log("Process Innings.....");
  if(match){
    const currentMatch = match.matchId;
    if(currentMatch){
      console.log("----1");
      const matchId = currentMatch.id;
      const innings = match?.innings;
      //console.log(innings);
      console.log("----2");
      if(innings){
        console.log("----3");
        for(let i=0;i<innings.length;i++){
          const ings = toInningsObject(innings[i], matchId);
          console.log("----4");
          const existingInnings = await Innings.findOne({ where: {matchId: matchId, inningsNumber: ings.inningsNumber,},});

          if(existingInnings){
            const id = existingInnings.id;
            console.log(`Ïnnings ${ings.inningsNumber} of match ${matchId} Found. Updating..`);

            const [updated] = await Innings.update(ings, {
              where: {id },
            });
            if (updated) {
              console.log("Innings updated successfully!");
            }else{
              console.log("Innings update failed!");
            }

          }else{
            console.log(`Ïnnings ${ings.inningsNumber} of match ${matchId} Not Found. Creating..`);

            const ins = await Innings.create(ings);

          }
          
        }
      }

    }

  }
}

const toInningsObject = (innings, matchId)=>{
  console.log(innings);
    return {
      matchId: matchId,
      inningsNumber: innings.inningsNumber,
      runRate: innings.runRate,
      declared: innings.declared,
      rodl: innings.rodl,
      battingTeamId: innings.battingTeamId,
      bowlingTeamId: innings.bowlingTeamId,
      blocks: innings.blocks,
      balls: innings.balls,
      ballsRemaining: innings.ballsRemaining,
      scorePrediction: innings.scorePrediction,
      runs: innings.scorecard.runs,
      wkts: innings.scorecard.wkts,
      ballsFaced: innings.scorecard.ballsFaced,
      fours: innings.scorecard.fours,
      sixes: innings.scorecard.sixes,
      allOut: innings.scorecard.allOut,
      fow: innings.scorecard.fow,
      extras: innings.scorecard.extras,
      battingStats: innings.scorecard.battingStats,
      bowlingStats: innings.scorecard.bowlingStats,
    };
}
processCurrentState = async (match) =>{
  console.log("Process CurrentState.....");
  if(match){
    const currentMatch = match.matchId;
    if(currentMatch){
      const matchId = currentMatch.id;

      console.log(matchId);
      const currentState = match?.currentState;
      //console.log(currentState);
      if(currentState){
        const existingState = await CurrentState.findByPk(matchId);
        currentState.matchId = matchId;
        if(existingState){
          console.log('Match State Found. Updating...');

          const [updated] = await CurrentState.update(currentState, {
            where: { matchId },
          });
          if (updated) {
            console.log("Match state updated successfully!");
          }else{
            console.log("Match state update failed!");
          }
        }else{
          console.log('Match State Not Found. Creating...');
          currentState.matchId = matchId;
          const newTeam = await CurrentState.create(currentState);
        }
      }

    }
   
  }
  
  
  /*
  const existingVenue = await Venue.findByPk(venue.id);
  if(existingVenue){
    console.log('Venue Found');
  }else{
    console.log('Venue Not Found');
    const newVenue = Venue.create(venue);
  }

  */
}
