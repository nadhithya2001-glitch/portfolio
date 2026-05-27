"""
Advanced AI Agent Configuration
Optional: For future features like tool calling, memory, and RAG
"""

from langchain_openai import ChatOpenAI
from langchain.memory import ConversationBufferMemory
from langchain.agents import initialize_agent, AgentType, Tool
from typing import Optional

class PortfolioAgent:
    """Advanced AI Agent with memory and tools"""
    
    def __init__(self, api_key: str, model: str = "gpt-3.5-turbo"):
        """Initialize the portfolio AI agent"""
        self.llm = ChatOpenAI(
            temperature=0.7,
            model=model,
            openai_api_key=api_key
        )
        
        # Initialize conversation memory
        self.memory = ConversationBufferMemory(
            memory_key="chat_history",
            return_messages=True,
            max_token_limit=2000
        )
        
        # Define tools (optional - for future enhancement)
        self.tools = [
            Tool(
                name="Portfolio Search",
                func=self._search_portfolio,
                description="Search for information about Adhithya's portfolio, projects, and experience"
            ),
            Tool(
                name="Contact Info",
                func=self._get_contact_info,
                description="Get contact information to reach out"
            )
        ]
        
        # Initialize agent
        self.agent = initialize_agent(
            self.tools,
            self.llm,
            agent=AgentType.CHAT_CONVERSATIONAL_REACT_DESCRIPTION,
            memory=self.memory,
            verbose=True,
            handle_parsing_errors=True
        )
    
    def _search_portfolio(self, query: str) -> str:
        """Search portfolio information"""
        return f"Found information about: {query}"
    
    def _get_contact_info(self, context: str) -> str:
        """Get contact information"""
        return "Email: adhithya@example.com | LinkedIn: linkedin.com/in/adhithya | GitHub: github.com/adhithya"
    
    def run(self, user_input: str) -> str:
        """Run the agent with user input"""
        response = self.agent.run(user_input)
        return response


# Example usage for future implementation:
"""
from agent import PortfolioAgent
import os

agent = PortfolioAgent(api_key=os.getenv("OPENAI_API_KEY"))
response = agent.run("Tell me about your machine learning projects")
print(response)
"""
