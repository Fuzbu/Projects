# player_name = 'Hero'
# player_attack = 10
# player_heal = 16
# player_health = 100

# list
# player = [player_name,player_attack,player_heal,player_health]




game_running = True


while game_running == True: 
    new_round = True
    player = { 
    'name': 'Hero',
    'attack': 10,
    'heal': 16,
    'health': 100
    }
    monster = {
    'name': 'monster',
    'attack': 12,
    'health': 100
    }

    while new_round == True:

        player_won = False
        monster_won = False

        print('Please select Action')
        print('1) Attack')
        print('2) Heal')
        print('3) Exit Game')


        player_choice = input()


        if player_choice == '1': 
          monster['health'] = monster['health'] - player['attack']
          if monster['health'] <= 0:
              player_won = True

          else: 
              player['health'] = player['health'] - monster['attack']
              if player['health'] <= 0:
                  monster_won = True

          print(monster['health'])
          print(player['health'])



        elif player_choice == '2':
          print('Heal Player')

        elif player_choice == '3':
          new_round = False
          game_running = False

        else:
          print('Invalid Action')

        if player_won == True or monster == True:
          new_round = False