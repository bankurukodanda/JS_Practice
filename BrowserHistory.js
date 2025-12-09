var BrowserHistory = {
    backList:[],
    present:"",
    forwardList:[],
    visit:function(url){
        if(this.present !="")
            this.backList.push(this.present)
        this.present=url;
        console.log("Visited URL", this.present);
    },
    forward: function(){
        if(this.forwardList.length){
            this.backList.push(this.present)
            this.present = this.forwardList.pop()
            console.log("Visited URL", this.present);     
        } else{
            console.log("No trace of forward URL");
        }
    },
    back: function(){
        if(this.backList.length){
            this.forwardList.push(this.present);
            this.present = this.backList.pop();
            console.log("Visited URL", this.present);
        } else{
            console.log("No trace of BrowserHistory")
        }
    }
}
