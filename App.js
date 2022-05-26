import Elements from './modules/Elements';

//GETs in URL
var $_GET=[];
window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(a,name,value){$_GET[name]=value;});

//https://runrun.it/pt-BR/tasks

//App class
const App = () =>{    
    alert("hello i'm app");
    alert(Elements());
};

//start app
App();