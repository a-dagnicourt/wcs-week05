import React from 'react';
import Avatar from './Avatar';

const yellowGuys = [
  {
    image:
      'https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png',
    firstName: 'Homer',
    lastName: 'Simpson',
    shout: () => alert('Doh !'),
  },
  {
    image:
      'https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png',
    firstName: 'Bart',
    lastName: 'Simpson',
    shout: () => alert('Ay Caramba !'),
  },
  {
    image:
      'https://www.stickees.com/files/cartoon/the-simpsons/2250-lisa-simpson-sticker.png',
    firstName: 'Lisa',
    lastName: 'Simpson',
    shout: () => alert('** Trumpets **'),
  },
  {
    firstName: 'Jean',
    lastName: 'Random',
    shout: () => alert('Nope'),
  },
];

const AvatarList = () => (
  <div>
    {yellowGuys.map((yellowGuy) => (
      <Avatar {...yellowGuy} key={yellowGuy.firstName} />
    ))}
  </div>
);

export default AvatarList;
