public class App {
    
    public static void main(String[] args) {
        Controller system = new Controller();
        Scanner sc = new Scanner(System.in);
        System.out.println("----------Twitter 🐤----------");

        while(true){
            try{
                String line = sc.nextLine();
                String[] ui = line.split(" ");
                if(ui[0].equals("end")){
                    break;
                }else if(ui[0].equals("addUser")){
                    system.addUser(ui[1]);
                }else if(ui[0].equals("show")){
                    System.out.println(system);
                }else if(ui[0].equals("follow")){
                    User one = system.getUser(ui[1]);
                    User two = system.getUser(ui[2]);
                    one.follow(two);
                }else if(ui[0].equals("unfollow")){
                    User one = system.getUser(ui[1]);
                    User two = system.getUser(ui[2]);
                    one.unfollow(two);
                }else if(ui[0].equals("tweet")){
                    String username = ui[1];
                    String msg = "";
                    for(int i=2;i<ui.length;i++)
                        msg += ui[i] + " ";
                    system.sendTweet(username, msg);
                }else if(ui[0].equals("inbox")){
                    User user = system.getUser(ui[1]);
                    System.out.println(user.getInbox());
                }else if(ui[0].equals("home")){
                    User user = system.getUser(ui[1]);
                    System.out.println(user.getTimeline());
                }else if(ui[0].equals("myTweets")){
                    User user = system.getUser(ui[1]);
                    System.out.println(user.getMyTweets());
                }else if(ui[0].equals("like")){
                    User user = system.getUser(ui[1]);
                    user.getTweet(Integer.parseInt(ui[2])).like(ui[1]);
                }else{
                    System.out.println("Comando invalido!");
                }
            }catch(IndexOutOfBoundsException e){ 
                System.out.println("Paramentros insuficientes para completar a operaçao!");
            }catch(RuntimeException e){
                System.out.println(e.getMessage());
            }
        }
        sc.close();
    }
}
