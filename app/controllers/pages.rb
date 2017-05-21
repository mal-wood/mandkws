require 'pony'
  require 'net/smtp'

get '/' do
  erb :index
end

get '/details' do 
  erb :details
end 

get '/party' do 
  erb :party
end 

get '/registry' do 
  erb :registry
end 

get '/timeline' do 
  erb :timeline
end 

# post '/rsvp' do 
# Pony.options = {
#   :from => 'demo@sendgrid.com',
#   :via => :smtp,
#   :via_options => {
#     :address        => 'smtp.sendgrid.net',
#     :port           => '587',
#     :user_name      => 'sendgriduser',
#     :password       => 'sendgridpassword',
#     :authentication => :plain
#   }
# }

# message = Pony.mail :to => 'mallorywood413@gmail.com', :from => 'kelseyjsantoro@gmail.com', :subject => 'SendGrid Delivered!', :body => 'Hello there. You look great today!'
#     redirect "/"

# end 
