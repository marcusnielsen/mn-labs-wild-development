import Rx from 'rx';

const themeName$ = Rx.Observable.fromArray([
  'cerulean',
  'cosmo',
  'cyborg',
  'darkly',
  'flatly',
  'journal',
  'lumen',
  'paper',
  'readable',
  'sandstone',
  'simplex',
  'slate',
  'spacelab',
  'superhero',
  'united',
  'yeti',
]);

const themeHref$ = Rx.Observable.zip(
  themeName$,
  Rx.Observable.interval(3000),
  (themeName) => {
    return themeName;
  })
  .map((themeName) => {
    return `http://maxcdn.bootstrapcdn.com/bootswatch/3.3.5/${themeName}/bootstrap.min.css`;
  });

export default themeHref$;
