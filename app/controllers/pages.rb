require 'pony'

get '/' do
  erb :index
end

get '/details' do 
  erb :details
end 

post '/rsvp' do 
  p params[:message]
  Pony.mail :to => 'mallorywood413@gmail.com',
  :from => 'kelseyjsantoro@gmail.com',
  :subject => params[:guests], 
  :body => params[:message]
  redirect to('/')
end 
