import { Parties } from '../../../both/collections/parties.collection';
import { Party } from '../../../both/models/party.model';

export function loadParties() {
  if (Parties.find().cursor.count() === 0) {
    const parties = [{
      name: 'Dubstep free zone',
      description: 'No more Dubstep',
      location: 'Palo Alto'
    }, {
      name: 'Dubstep att the way',
      description: 'Get in on',
      location: 'Gothenburg'
    }, {
      name: 'Loungin',
      description: 'Chill',
      location: 'San Fran'
      
    }];

    parties.forEach((party: Party) => Parties.insert(party));

  }
}