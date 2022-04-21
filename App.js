import React, { Component } from 'react';
import { View,StatusBar,Text,TouchableOpacity } from 'react-native';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      hasil:0,
      hitung:0,
      hapusKarakterTerakhir:0,

    };
  }

  masukanAngka = (value)=>{
    if(this.state.hitung==0){
      this.setState({hitung:value})

    }else{
      this.setState({hitung:this.state.hitung+''+value})

    }
  }
  hitunghasil = ()=>{
    let hasil=eval(this.state.hitung);
    this.setState({hitung:hasil})
  }


  render(){
    return (

      <View style={{flex:1,backgroundColor: 'black'}}> 
       <StatusBar backgroundColor="#212121" barStyle="light-content" /> 

       <View style={{flex: 0.3,justifyContent:'center',marginHorizontal:10}}>
       <Text style ={{color:'white',fontSize:48,textAlign:'right'}}>{this.state.hitung}</Text>
       </View>

       <View style={{flex: 1}}>
       <TouchableOpacity style={{flexDirection: 'row',borderBottomColor:'#212121',borderBottomWidth:1}}>
          <TouchableOpacity style={{flex: 1,justifyContent:'center',padding:10,margin:10}}
          onPress={() => this.setState({hitung:0})}>
            <Text style ={{color:'#95CD41',fontSize:24,textAlign:'right'}}>Clear</Text>
          </TouchableOpacity>
        </TouchableOpacity>

       <View style={{flexDirection: 'row', }}>
          <TouchableOpacity style={{flex: 1,height:60,justifyContent:'center',padding:1,margin:20,backgroundColor: '#212121',borderRadius:200}}
          onPress={()=>this.masukanAngka('(')}>
          
            <Text style ={{color:'#95CD41',fontSize:24,textAlign:'center'}}>(</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1,height:60,justifyContent:'center',padding:1,margin:20,backgroundColor: '#212121',borderRadius:200}}
          onPress={()=>this.masukanAngka(')')}
          >
            <Text style ={{color:'#95CD41',fontSize:24,textAlign:'center'}}>)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1,height:60,justifyContent:'center',padding:1,margin:20,backgroundColor: '#212121',borderRadius:200}}
          onPress={()=>this.masukanAngka('/100')}
          >
            <Text style ={{color:'#95CD41',fontSize:24,textAlign:'center'}}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1,height:60,justifyContent:'center',padding:1,margin:20,backgroundColor: '#212121',borderRadius:200}}
          onPress={()=>this.masukanAngka('/')}
          >
            <Text style ={{color:'#95CD41',fontSize:24,textAlign:'center'}}>/</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', }}>
          <TouchableOpacity style={{flex: 1,height:60,justifyContent:'center',padding:1,margin:20,backgroundColor: '#212121',borderRadius:200}}
          onPress={()=>this.masukanAngka(7)}>
            <Text style ={{color:'#ffffff',fontSize:24,textAlign:'center'}}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1,height:60,justifyContent:'center',padding:1,margin:20,backgroundColor: '#212121',borderRadius:200}}
          onPress={()=>this.masukanAngka(8)}>
            <Text style ={{color:'#ffffff',fontSize:24,textAlign:'center'}}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1,height:60,justifyContent:'center',padding:1,margin:20,backgroundColor: '#212121',borderRadius:200}}
          onPress={()=>this.masukanAngka(9)}>
            <Text style ={{color:'#ffffff',fontSize:24,textAlign:'center'}}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1,height:60,justifyContent:'center',padding:1,margin:20,backgroundColor: '#212121',borderRadius:200}}
          onPress={()=>this.masukanAngka('*')}>
            <Text style ={{color:'#95CD41',fontSize:24,textAlign:'center'}}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', }}>
          <TouchableOpacity style={{flex: 1,height:60,justifyContent:'center',padding:1,margin:20,backgroundColor: '#212121',borderRadius:200}}
          onPress={()=>this.masukanAngka(4)}>
            <Text style ={{color:'#ffffff',fontSize:24,textAlign:'center'}}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1,height:60,justifyContent:'center',padding:1,margin:20,backgroundColor: '#212121',borderRadius:200}}
          onPress={()=>this.masukanAngka(5)}>
            <Text style ={{color:'#ffffff',fontSize:24,textAlign:'center'}}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1,height:60,justifyContent:'center',padding:1,margin:20,backgroundColor: '#212121',borderRadius:200}}
          onPress={()=>this.masukanAngka(6)}>
            <Text style ={{color:'#ffffff',fontSize:24,textAlign:'center'}}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1,height:60,justifyContent:'center',padding:1,margin:20,backgroundColor: '#212121',borderRadius:200}}
          onPress={()=>this.masukanAngka('-')}
          >
            <Text style ={{color:'#95CD41',fontSize:24,textAlign:'center'}}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', }}>
          <TouchableOpacity style={{flex: 1,height:60,justifyContent:'center',padding:1,margin:20,backgroundColor: '#212121',borderRadius:200}}
          onPress={()=>this.masukanAngka(1)}
          >
            <Text style ={{color:'#ffffff',fontSize:24,textAlign:'center'}}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1,height:60,justifyContent:'center',padding:1,margin:20,backgroundColor: '#212121',borderRadius:200}}
          onPress={()=>this.masukanAngka(2)}>
            <Text style ={{color:'#ffffff',fontSize:24,textAlign:'center'}}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1,height:60,justifyContent:'center',padding:1,margin:20,backgroundColor: '#212121',borderRadius:200}}
          onPress={()=>this.masukanAngka(3)}>
            <Text style ={{color:'#ffffff',fontSize:24,textAlign:'center'}}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1,height:60,justifyContent:'center',padding:1,margin:20,backgroundColor: '#212121',borderRadius:200}}
          onPress={()=>this.masukanAngka('+')}
          >
            <Text style ={{color:'#95CD41',fontSize:24,textAlign:'center'}}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', }}>
          <TouchableOpacity style={{flex: 1,height:60,justifyContent:'center',padding:1,margin:20,backgroundColor: '#212121',borderRadius:200}}
          onPress={() => this.setState({hitung:0})}
          >
            <Text style ={{color:'#B20600',fontSize:24,textAlign:'center'}}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1,height:60,justifyContent:'center',padding:1,margin:20,backgroundColor: '#212121',borderRadius:200}}
          onPress={()=>this.masukanAngka(0)}>
            <Text style ={{color:'#ffffff',fontSize:24,textAlign:'center'}}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1,height:60,justifyContent:'center',padding:1,margin:20,backgroundColor: '#212121',borderRadius:200}}
          onPress={()=>this.masukanAngka('.')}
          >
            <Text style ={{color:'#ffffff',fontSize:24,textAlign:'center'}}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1,height:60,justifyContent:'center',padding:1,margin:20,backgroundColor: 'green',borderRadius:200}}
          onPress={()=>this.hitunghasil()}
          >
            <Text style ={{color:'#ffffff',fontSize:24,textAlign:'center'}}>=</Text>
          </TouchableOpacity>
        </View>
       </View>

       
      </View>
    );
  }
}
export default App;