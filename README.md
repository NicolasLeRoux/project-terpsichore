# project-terpsichore
TODO

## Notes

Les données réellement nécessaires sont:
- Organisateur
- Titre
- Date (Date et heure de début)
- Adresse/lieu
- Keyword
- Lien vers l'original
- Description (Markdown)

Avoir une page d'enregistrement sinon c'est l'enfer... Se rapprocher de ce qui est proposer par meetup, ça marche bien.


Exemple:
- Organisateur: Le temple du swing
- Titre: Soirée west coast swing et zouk à Nation
- Date: 2017-05-07T16:30:00+02:00
-
- Adresse: 5 rue de Lagny 75020 Paris (48.848956, 2.400202)
- Keyword: west coast swing, zouk, initiation zouk
- Lien: https://www.templeduswing.com/soirees-bebop-west-coast-swing-lindy-hop-paris#bp094ut2tgsttq6tbmh95i26v4
- Description: # Lorem ipsus...

Commencer par faire le global pour ensuite aller plus bas.

https://firebase.googleblog.com/2014/01/queries-part-2-advanced-searches-with.html


## Filtrage des données

Pour une recherche de type:
- Après le 07/05/2017 à 21H00
- Proche de 48.855151, 2.344919

Je veux avoir en résultat:
- Soirée west coast swing et zouk à Nation
- 2017-05-08T16:30:00+02:00
- 5 rue de Lagny 75020 Paris (48.848956, 2.400202)

On peux imaginer une query de type:
A creuser...

Pour une recherche de type:
- Après le 07/05/2017 à 21H00
- Proche de 48.855151, 2.344919
- wcs


On peux imaginer un premier tri côté back puis un plus simple côté front.
Du genre, tri par date, puis les autres filtrages, localisation et type avec un
second appel serveur par event à afficher.
