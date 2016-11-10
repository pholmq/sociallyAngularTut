import { Parties } from '../../../both/collections/parties.collection';

export function loadParties() {
  if (Parties.find().cursor.count() === 0) {
    const parties = [(
      name: 'Dubstep free zone'
    )]
  }
}