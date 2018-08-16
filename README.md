# react-redux

containerの中に書く、connectは一言でいうと「ReactComponentをReduxの仕組みに乗っけるメソッド」である  
connectでは、該当Componentに渡すstateを指定(`state => state`, `state => state.title`など)  
dispatchは渡しても渡さなくても良いが、actionをそのまま渡すのではなく、dispatchした後のactionを渡すことによって、該当Componentのpropsからdispatchしたactionに直接アクセスできる  
それによって、メソッドをComponent内でdispatchする必要なく、actionを通常のメソッドのように実行できる。  
connect内dispatchでは、key=>valueの流れで書ける  
keyは該当Component内で`this.props.メソッド名`のようにアクセスできる  
該当Componentは`connect(stateやdispatch)(該当Component)`の形で記述できる  


dispatchでactionを実行し、reducerに送る(dispatchするとreducerに入っていく)  

actionで設定したtypeによって、reducer内部を分岐する  
reducer内部では、actionから渡された新しいデータと、今までの古いstateと、actionから渡されたtypeを受け取ることが多い  
reducer内部では新しいデータと古いstateを混ぜ合わせて、良い感じのstateにして返す  

返した値は良い感じにstoreに反映される  

