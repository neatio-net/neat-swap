const Router = artifacts.require("UniswapV2Router02.sol");
const WETH = artifacts.require("WETH.sol");

module.exports = async function(deployer,network,addresses){
   // await deployer.deploy(Factory,addresses[0])
   // const Router = await Routeer.deployed();
   // let token1Address, token2Address;

   let weth;   
   const FACTORY_ADDRESS = "0xF0664fCEbaFE9883C3fAb735ea1DCdda8b3fcd67"
   if(network === "mainnet"){
   //  token1Address = '';
   //  token2Address = '';
   }else{
      await deployer.deploy(WETH);
      weth = await WETH.deployed();
   }
   await deployer.deploy(Router,FACTORY_ADDRESS,weth.address);
}