
//contains the location page feature
var search = new Vue({
el:'#vue-search',//which elements this vue instance will control
data:{
    helloWorld: 'Hello world 1',
    search:'',
    locations:[ 
        {name:'Perth Branch',address:'Address: Ground Floor, 179 St Georges Terrace, Perth WA 6000',contact:'Tel: +61 8 9263 3777'},
        {name:'Adelaide Branch',address:'Address: Level 8, 1 King William Street, Adelaide SA 5000',contact:'Tel: +61 8 8210 8988'},
        {name:'Burwood Branch',address:'Address: 170 Burwood Road, Burwood NSW 2134',contact:'Tel: +61 2 8741 0666'},
        {name:'Chatswood Branch',address:'Address: Shop 12, The Concourse, Corner of Anderson St & Victoria Ave, Chatswood NSW 2067',contact:'Tel: +61 2 8440 8600'},
        {name:'Hurstville Branch',address:'Address: 213 Forest Road, Hurstville NSW 2220',contact:'Tel: +61 2 9586 3205'},

        {name:'Brisbane Branch',address:'Address: Ground Floor, 307 Queen Street, Brisbane QLD 4000',contact:'Tel: +61 7 3221 3988'},
        {name:'Sunnybank Branch',address:'Address: Ground Floor, Shop 1 Market Square, 341 Mains Rd, Sunnybank QLD 4109',contact:'Tel: +61 7 3727 8588'},
        {name:'Melbourne Branch',address:'Address: Level 21,120 Collins Street, Melbourne VIC 3000',contact:'Tel: +61 3 9602 3655'},
        {name:'Box Hill Branch',address:'Address: G02, 545-563 Station Street, Box Hill VIC 3128',contact:'Tel:+61 3 9899 79881'},
        {name:'Melbourne Monash Branch',address:'Address: G01, 52-56 O\'Sullivan Road, Glen Waverley VIC 3150',contact:'Tel: +61 3 8805 7500'},
    ]
},
computed:{
    filteredLocations:function(){
        return this.locations.filter((location)=> {return location.name.toLowerCase().match(this.search)})
    }
}
});



/* fixed button for social media -- custom directive vue*/ 

Vue.directive('pin', 
{
        bind: function (el, binding, vnode) 
        {
        el.style.position = 'fixed'
        var s = (binding.arg == 'right' ? 'right' : 'top')
        el.style[s] = binding.value + 'px'
        }
  });
  
    new Vue({
        el: '#dynamic-buttons',
        data: function () {
        return {
            direction: 'right'
        }
        }
    });


  /*booking vue js */

  var form = new Vue({
    el:'#vue-form',                     //which elements this vue instance will control
    data:{
        entry:{
        email:'',
        name:'',
        contactNumber:'',
        timeStart:'',
        timeEnd:'',
        date:'',
        branch:''
        },
        test:[],


    },
 
    methods:{
        handleSubmit:function(){
            const newEntry=Object.assign({},this.entry)
            this.test.push(newEntry);
            console.log(this.test)
            this.entry={...this.entry, email:'',name:'',
            contactNumber:'',
            search:'',
            timeStart:'',
            timeEnd:'',
            date:'',
            branch:''}
            alert('Form has been submitted!');
        }

    },
});



