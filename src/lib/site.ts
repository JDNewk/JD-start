export const business = {
  name: 'QC Tote Rental',
  tagline: 'We drop off. You pack. We pick up.',
  region: 'Quad Cities',
  phone: '(309) 489-3025',
  email: 'hello@qctoterental.com',
}

export interface Package {
  id: string
  name: string
  totes: number
  price: number
  dollies: number
  bestFor: string
  popular?: boolean
}

export const packages: Array<Package> = [
  {
    id: 'starter',
    name: 'Starter',
    totes: 20,
    price: 99,
    dollies: 1,
    bestFor: 'Studio & 1-bedroom apartments',
  },
  {
    id: 'mover',
    name: 'Mover',
    totes: 40,
    price: 169,
    dollies: 2,
    bestFor: '2-3 bedroom houses',
    popular: true,
  },
  {
    id: 'ultimate',
    name: 'Ultimate',
    totes: 60,
    price: 219,
    dollies: 3,
    bestFor: '4+ bedroom houses & big declutters',
  },
]

// Free-delivery core of the Quad Cities metro straddling the Mississippi River.
export const freeZoneCities = [
  'Davenport, IA',
  'Bettendorf, IA',
  'Rock Island, IL',
  'Moline, IL',
  'East Moline, IL',
  'Silvis, IL',
  'Milan, IL',
  'Geneseo, IL',
  'Coal Valley, IL',
  'Colona, IL',
  'Port Byron, IL',
  'LeClaire, IA',
]

// Just outside the core metro — still served, delivery fee applies.
export const feeZoneCities = [
  'Muscatine, IA',
  'Clinton, IA',
  'Eldridge, IA',
  'DeWitt, IA',
  'Orion, IL',
]

export const locationOptions = [
  ...freeZoneCities,
  ...feeZoneCities,
  'Self pickup / drop-off (Moline warehouse)',
  'Somewhere else in Illinois or Iowa',
]

export function deliveryMessage(dropoff: string, pickup: string): string {
  if (!dropoff || !pickup) {
    return 'Choose your drop-off and pickup spots to see pricing.'
  }
  if (dropoff.startsWith('Self pickup') && pickup.startsWith('Self pickup')) {
    return "You're picking up and returning at our Moline warehouse — take $10 off any package."
  }
  const dropoffFree = freeZoneCities.includes(dropoff)
  const pickupFree = freeZoneCities.includes(pickup)
  const dropoffFee = feeZoneCities.includes(dropoff)
  const pickupFee = feeZoneCities.includes(pickup)
  const dropoffOut = dropoff === 'Somewhere else in Illinois or Iowa'
  const pickupOut = pickup === 'Somewhere else in Illinois or Iowa'

  if (dropoffOut || pickupOut) {
    return "That's outside our usual routes — tell us the address in the notes and we'll confirm whether we can reach you."
  }
  if (dropoffFree && pickupFree) {
    return 'Both stops are inside our free-delivery zone — no delivery fee.'
  }
  const legsOutside = (dropoffFee ? 1 : 0) + (pickupFee ? 1 : 0)
  if (legsOutside === 2) {
    return 'Both stops are outside the free zone — a $30 delivery fee applies ($15 per leg).'
  }
  if (legsOutside === 1) {
    return 'One stop is outside the free zone — a $15 delivery fee applies for that leg.'
  }
  return 'Pricing will be confirmed when we schedule your drop-off.'
}
