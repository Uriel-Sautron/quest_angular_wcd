import { Kitten } from './models/kitten.model';

export const KITTENS: Kitten[] = [
  new Kitten(
    'Bella',
    'Angora',
    new Date(2022, 10, 22),
    'https://placekitten.com/200/179'
  ),
  new Kitten(
    'Cookie',
    'Sibérien',
    new Date(2018, 8, 22),
    'https://placekitten.com/200/104'
  ),
  new Kitten(
    'Fripouille',
    'Bengal',
    new Date(2021, 12, 12),
    'https://placekitten.com/200/90'
  ),
  new Kitten(
    'Gribouille',
    'Sibérien',
    new Date(2020, 12, 24),
    'https://placekitten.com/200/87'
  ),
  new Kitten(
    'Grisou',
    'Angora',
    new Date(2018, 10, 22),
    'https://placekitten.com/200/118'
  ),
  new Kitten(
    'Junior',
    'Bengal',
    new Date(2018, 9, 13),
    'https://placekitten.com/200/99'
  ),
];
