import{View,StyleSheet, Text, FlatList, Image,Button}from "react-native"
const data=[{
    id:'1',
    name:"Single Burger",
    image: require('../assets/burger.jpg'),
    description:"Perfectly grilled single patty burger, topped with fresh lettuce, ripe tomato,and melted cheddar on a toasted bun",
    price:70.00
},
{
    id:'2',
    name:"Chicken Pizza",
    image: require('../assets/pizza.jpg'),
    description:"Tender, seasoned chicken and rich Alfredo sauce on a crispy crust, topped with melted mozzarella, fresh spinach, and a hint of garlic",
    price:150.00
},
{
    id:'3',
    name:"Baked Salmon",
    image: require('../assets/salmon.jpg'),
    description:"Tender salmon topped with luxurious caviar, served alongside perfectly steamed broccoli and honey-glazed carrots",
    price:200.00
},
{
    id:'4',
    name:"Creamy Pasta",
    image: require('../assets/pasta.jpg'),
    description:"Creamy pasta dish featuring al dente pasta coated in a rich white sauce, topped with tangy blue cheese and garnished with fresh, vibrant green edible leaves for a gourmet touch.",
    price:130.00
},
{
    id:'5',
    name:"Sushi Platter",
    image: require('../assets/sushi.jpg'),
    description:"Sushi platter offering a stunning assortment of fresh, expertly crafted sushi, including vibrant sashimi, flavorful nigiri, and a variety of rolls, all served with pickled ginger, wasabi, and soy sauce",
    price:250.00
},
{
    id:'6',
    name:"Wagyu and Veggies",
    image: require('../assets/wagyu.jpg'),
    description:"Tender and succulent Wagyu Beef, cooked to perfection with a medley of vibrant vegetables, creating a harmonious blend of rich, flavorful meat and crisp, fresh veggies in every bite",
    price:750.00
},
]
const Item = ({name, image, description,price,onAddToCart}) => (
    <View>
      <Text style={styles.title}>{name}</Text>
      <Image source={image} style={styles.imag} />
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>R{price}</Text>
      <Button 
      title="Add to Cart"  onPress={onAddToCart} 
    />
    </View>)
export default function Menu({addItemToCart}){
    return(
        <View style={styles.conatiner}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Opulent Plates Menu</Text>
                <Text style={{color:"#fdf0d5", marginTop:70}}>A taste of majesty</Text>
            </View>
            <FlatList
            data={data}
            renderItem={({ item }) => <Item name={item.name} image={item.image} description={item.description} price={item.price} onAddToCart={() => addItemToCart(item)} />}
            keyExtractor={item => item.id}>
            </FlatList>
        </View>
    )
}

const styles=StyleSheet.create({
    conatiner:{
        flex:1,
        backgroundColor:"eae2b7"
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        backgroundColor:"#d62828",
        alignItems:"center"
    },
    headerText:{
        fontSize:25,
        fontWeight:"bold",
        color:"#fdf0d5",
        marginTop:50,
        marginBottom:20
    },
    title:{
        fontSize:30,
        marginBottom:15,
        align:"center",
        textAlign: "center",
        fontWeight:"bold"
    },
    description:{
        marginBottom:15,
        textAlign:"justify",
        fontSize:20
    },
    imag:{
        width:"100%",
        height:150
    },
    price:{
        alignSelf:"center",
        marginBottom:30,
        fontSize:20,
        fontStyle:"italic",
        textDecorationLine:"underline"
        
    },
    button: 
    {
       marginTop: 10,
        backgroundColor: '#d62828',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },

})