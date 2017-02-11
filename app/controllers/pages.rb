require 'pony'

get '/' do
  erb :index
end

get '/details' do 
  erb :details
end 

get '/party' do 
  erb :party
end 

post '/rsvp' do 
  Pony.mail :to => 'mallorywood413@gmail.com',  
    :from => "kelseyjsantoro@gmail.com",
    :subject => "hhhhhh",
    :body => "afdafdfasfd"
    redirect "/"
end 
