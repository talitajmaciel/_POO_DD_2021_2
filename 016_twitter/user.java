public class User {
    
    private String userName;
    private TreeMap<String, User> followers;
    private TreeMap<String, User> following;
    private TreeMap<Integer, Tweet> timeline;
    private ArrayList<Tweet> inbox;
    private ArrayList<Tweet> myTweets;
    private int unreadCount;

    public User(String userName){
        this.userName = userName;
        this.followers = new TreeMap<>();
        this.following = new TreeMap<>();
        this.timeline = new TreeMap<>();
        this.myTweets = new ArrayList<>();
        this.inbox = new ArrayList<>();
        this.unreadCount = 0;
    }

    public void follow(User other){
        if(following.containsKey(other.userName))
            throw new RuntimeException("Erro: voce ja segue este user: "+other.userName);
        following.put(other.userName, other);
        other.followers.put(this.userName, this);
    }

    public void unfollow(User other){
        if(!following.containsKey(other.userName))
            throw new RuntimeException("Erro: voce nao segue esse user: "+other.userName);
        following.remove(other.userName);
        other.followers.remove(this.userName);
    }

    public void sendTweet(Tweet tweet){
        myTweets.add(tweet);
        inbox.add(tweet);
        for(User follower: followers.values()){ 
            follower.inbox.add(tweet);
            follower.unreadCount++;
        }
    }

    public Tweet getTweet(int idTw){
        if(!timeline.containsKey(idTw))
            throw new RuntimeException("Erro: tweet nao encontrado... Tente novamente!");
        return timeline.get(idTw);
    }

    public String getUnreadCount() {
        StringBuilder dataUnreadCount = new StringBuilder();
        dataUnreadCount.append(unreadCount + " novas postagens nao lidas");
        return dataUnreadCount.toString();
    }

    public void clearInbox(){
        for(Tweet tweet : inbox)
            this.timeline.put(tweet.getIdTw(), tweet);
        this.inbox.clear();
        this.unreadCount = 0;
    }

    public String getInbox(){
        StringBuilder dataInbox = new StringBuilder();
        dataInbox.append(getUnreadCount()+"\n");
        for(Tweet tweet : inbox)
            dataInbox.append(tweet.toString()+"\n");
        clearInbox();
        return dataInbox.toString();
    }

    public String getTimeline() {
        StringBuilder dataTimeline = new StringBuilder();
        dataTimeline.append(getUnreadCount()+" em sua caixa de entrada 💌\n");
        for(Tweet tweet : timeline.values())
            dataTimeline.append(tweet.toString()+"\n");
        return dataTimeline.toString();
    }

    public String getMyTweets(){
        StringBuilder dataMy = new StringBuilder();
        for(Tweet tweet : myTweets)
            dataMy.append(tweet.toString()+"\n");
        return dataMy.toString();
    }

    public String getUserName() {
        return userName;
    }

    public int getSizeFollowing(){
        return following.size();
    }

    public int getSizeFollowers(){
        return followers.size();
    }

    public TreeMap<String, User> getFollowers() {
        return followers;
    }

    public TreeMap<String, User> getFollowing() {
        return following;
    }
}