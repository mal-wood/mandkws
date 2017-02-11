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

post '/rsvp' do 
 Pony.mail(
    to: "mallorywood413@gmail.com"
    from: "MyApp Help Desk <noreply@myapp.com>",
    subject: "MyApp Account Verification",
    body: "A request has been made to verify your MyApp account (https://myapp.com)." +
          "If you made this request, go to If you did not make this request, ignore this email.",
  )
    redirect "/"

end 
