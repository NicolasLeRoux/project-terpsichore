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


## Le géoHash

u09ty correspond à 48.8, 2.4
u09tysevbc2k correspond à 48.848956, 2.400202 (5 rue de Lagny 75020 Paris)
u09tdxpxqu9p correspond à 48.819019 2.229829 (Gare de Bellevue, 92190 Meudon)
u09tvqp2vur3 correspond à 48.856353 2.350301 (Paris)

Sans utiliser de backend, ça risque d'être assez complexe...


## Algolia

La solution pour avoir une recherche avancée simple à mettre en oeuvre et très
performante.

Pour pouvoir activer la recherche par géolocalisation:

```json
"_geoloc": {
	"lat": 40.639751,
	"lng": -73.778925
}
```

Plus de détails [ici](https://www.algolia.com/doc/guides/geo-search/geo-search-overview/)


## Alimentation des events

Afin de ne pas passer trop de temps à faire des crowlers pour le web, proposer de la
review.

Exemple:
Un onglet permet de créer des events en suivant les différentes étapes. Titre de
l'event (1), date de l'event (2), lieu de l'event (3)... Une fois l'event saisi,
il est enregistré dans un répertoire tmp accessible à tous (Dangé). Les events
sont ensuites à reviewer afin de les ajouter dans la base. Review par un admin
dans un premier temps, puis par les users dans un second temps.

Par la suite, les crowlers pouront faire des ajouts a reviewer.


## Landing page

Questionnement sur la page d'accueil du site. Idée, avoir une page qui regroupe
des events plus important que ce qui ce trouve sur la liste des events. Permettre
l'affichage de moins de data afin de limiter les recherche avec algolia. Par la suite,
la mise en avant de ces derniers peut être facturé aux organisateurs...

Le test actuelle est trop important en volume. Un seul event est visible...
