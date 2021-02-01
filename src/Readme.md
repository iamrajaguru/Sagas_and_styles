# Portals
Let you render children into a different DOM subtree. See the documentation on portals for more details.

# Component Life Cycle

##constructor()

    The constructor for a React component is called before it is mounted. When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor, which can lead to bugs.

    Typically, in React constructors are only used for two purposes:

    Initializing local state by assigning an object to this.state.
    Binding event handler methods to an instance.
        constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
        }

##getDerivedStateFromProps(props, state)

    getDerivedStateFromProps is invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing

    it might be handy for implementing a <Transition> component that compares its previous and next children to decide which of them to animate in and out

##render()

##componentDidMount()

    invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

##shouldComponentUpdate(nextProps, nextState) Default true


    It helps react to know whether component output is not affect by current change in state or props

    if(this.props.id!== this.nextProps.id)
    return false

    Note that returning false does not prevent child components from re-rendering when their state changes

    if shouldComponentUpdate() returns false, then UNSAFE_componentWillUpdate(), render(), and componentDidUpdate() will not be invoked.

render()

getSnapshotBerforeUpdate(prevProps, prevState)

    It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed. Any value returned by this lifecycle will be passed as a parameter to componentDidUpdate()


    This use case is not common, but it may occur in UIs like a chat thread that need to handle scroll position in a special way.

    A snapshot value (or null) should be returned.

            class ScrollingList extends React.Component {
                constructor(props) {
                    super(props);
                    this.listRef = React.createRef();
                }

                getSnapshotBeforeUpdate(prevProps, prevState) {
                    // Are we adding new items to the list?
                    // Capture the scroll position so we can adjust scroll later.
                    if (prevProps.list.length < this.props.list.length) {
                    const list = this.listRef.current;
                    return list.scrollHeight - list.scrollTop;
                    }
                    return null;
                }

                componentDidUpdate(prevProps, prevState, snapshot) {
                    // If we have a snapshot value, we've just added new items.
                    // Adjust scroll so these new items don't push the old ones out of view.
                    // (snapshot here is the value returned from getSnapshotBeforeUpdate)
                    if (snapshot !== null) {
                    const list = this.listRef.current;
                    list.scrollTop = list.scrollHeight - snapshot;
                    }
                }

                render() {
                    return (
                    <div ref={this.listRef}>{/* ...contents... */}</div>
                    );
                }
                }

componentDidUpdate(prevProps, prevState, snapshot)

     is invoked immediately after updating occurs. This method is not called for the initial render.
        componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.userID !== prevProps.userID) {
            this.fetchData(this.props.userID);
        }
        }

componentWillUnmount()

    invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount()

static getDerivedStateFromError(error)

    This lifecycle is invoked after an error has been thrown by a descendant component. It receives the error that was thrown as a parameter and should return a value to update state.

    class ErrorBoundary extends React.Component {
        constructor(props) {
            super(props);
            this.state = { hasError: false };
        }

        static getDerivedStateFromError(error) {
            // Update state so the next render will show the fallback UI.
            return { hasError: true };
        }

        render() {
            if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
            }

            return this.props.children;
        }
        }

componentDidCatch(error, info)

    This lifecycle is invoked after an error has been thrown by a descendant component. It receives two parameters:

    error - The error that was thrown.
    info - An object with a componentStack key containing information about which component threw the error.
