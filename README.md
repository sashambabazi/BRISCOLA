# Briscola

Classic Italian card-playing game built in React.

### Screens
1. https://drive.google.com/file/d/1IQuHQ04OoGRQaq7ArbOT-zdeihU8DCA2/view?usp=sharing 
	- Notice bug at 00:20

2. https://drive.google.com/file/d/1wmQxkHHzLOIafqgjNiFbxszukFrj3c6D/view?usp=sharing
	- styling and functionality update
	- card playing broken
	- clicking bug yet to be fixed
    
## Tasks

- [x] Game Skeleton
- [x] Produce card deck array based on suits and ranks (individual objects with card and rank as keys)
- [x] Render card component (rank and suit received as props, internal props: faceUp or ~Down)
- [x] Render 'table, 'deck', 'player hand'
- [x] Move card objects from one array to another and have their corresponding views react
- [x] Render pile of played cards

- [x] Shuffle deck on initialization
- [x] ~~Card face (up/down) taken as prop~~

- [x] ~~enable select-then-play functionality through CSS~~

- [x] Duplication and rerendering problem / Multiple children with same key
- [x] Refactor Game.jsx into individual components (useContext, MobX)
- [x] Revise Playedpile position and child-card funtionality: should programatically fan out

- [x] Restyle App

- [ ] Apply game logic
	- [ ] Create players programatically
		- [x] Initiate players as objects
		- [x] ...so far with name, hand, strategy(class method assigned at initialization, chosen status


	- [x] choose and place brisc..
		- [ ] ... programatically

	- [x] created getplayerOrder class function that "provides" player order for dealing and playing
	- [x] created runGame, runRound, playersPlay
		- [ ] applied async functionality to each playerStrategy

		- [ ] user strategy currently awaits "card" to be returned from event listener

		- [ ] ~~**Revise cardClick function: select one card at a time**~~
			- [ ] programatically add and remove event listener

	- [ ] finish roundWinner, gameWinner functions 

- [ ] Restyle card piles


- [ ] Style card transitions from deck to hand, etc
