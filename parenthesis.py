import random

def valid_parenthesis(chain):
   new_chain = chain
   print(new_chain)
   is_valid = False
   
   # In each iteration, 
   # Check if the pair "()" is present in the chain
   # If it is presence, we eliminate all ocurrences of "()"
   # until we get an empty chain or no more ocurrences of "()"
   
   is_present = True 
   
   while is_present and len(new_chain)>0:
      for k in range(0,len(new_chain)):
         
         # TODO: check if the pair "()" is present, then eliminate it
         sub_chain = new_chain[k:k+2]
         if(sub_chain == "()"):
            new_chain = new_chain.replace("()","")
            break
         
         if(k == len(new_chain)-1):
            # print(is_valid)
            is_present = False
      
   if(len(new_chain)==0):
         is_valid = True
               
   print(is_valid)
   print()
   
   
valid_parenthesis(")(")
valid_parenthesis("(((())))")


valid_parenthesis("()")
valid_parenthesis(")(()))")
valid_parenthesis("(")
valid_parenthesis("(())((()())())")

def sample_generator_for_testing(initialChain = "()"):
   
   chain = initialChain
   
   for i in range(0,10):
      chain = list(chain)
      random_position = random.randint(0, len(chain)-1)
      char = chain[random_position]
      
      chain[random_position] = char + "()"
      chain = "".join(chain)
   
   return chain
   

valid_parenthesis(sample_generator_for_testing("()"))
valid_parenthesis(sample_generator_for_testing("()"))
valid_parenthesis(sample_generator_for_testing("()"))
valid_parenthesis(sample_generator_for_testing("()"))
valid_parenthesis(sample_generator_for_testing("()"))
valid_parenthesis(sample_generator_for_testing("()"))
valid_parenthesis(sample_generator_for_testing("()"))
valid_parenthesis(sample_generator_for_testing("()"))
valid_parenthesis(sample_generator_for_testing("()"))
valid_parenthesis(sample_generator_for_testing("()"))