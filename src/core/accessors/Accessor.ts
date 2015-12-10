import {State} from "../state/State"
import {ImmutableQuery} from "../query/ImmutableQuery";
import {Searcher} from "../Searcher"

export class Accessor<T extends State<any>> {
  key:string
  urlKey:string
  state:T
  resultsState:T
  searcher:Searcher
  constructor(key, urlString?){
    this.key = key
    this.urlKey = urlString || key && key.replace(/\./g, "_")
    this.resultsState = this.state
  }

  setSearcher(searcher){
    this.searcher = searcher
  }

  onStateChange(oldState){

  }

  getResults(){
    return this.searcher.results
  }

  setResultsState(){
    this.resultsState = this.state
  }

  resetState(){
    this.state = this.state.clear()
  }

  buildSharedQuery(query:ImmutableQuery){
    return query
  }
  buildOwnQuery(query:ImmutableQuery){
    return query
  }
}
